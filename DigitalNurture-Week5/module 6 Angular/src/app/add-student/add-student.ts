import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  studentForm: FormGroup;
  responseMessage = '';

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  saveStudent() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      this.responseMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const formValue = this.studentForm.value;
    const newStudent: Student = {
      id: 0,
      name: formValue.name?.trim() || '',
      username: formValue.username?.trim() || '',
      email: formValue.email?.trim() || ''
    };

    this.studentService.addStudent(newStudent).subscribe({
      next: (result) => {
        this.responseMessage = `Student added with id ${result.id}`;
        this.studentForm.reset();
      },
      error: () => {
        this.responseMessage = 'Failed to add student.';
      }
    });
  }
}
