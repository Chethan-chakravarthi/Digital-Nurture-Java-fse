import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css'
})
export class StudentRegistration {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      course: ['', Validators.required]

    });

  }

  register() {

    if (this.registrationForm.valid) {

      alert('Student Registered Successfully!');

      console.log(this.registrationForm.value);

      this.registrationForm.reset();

    }

  }

}
