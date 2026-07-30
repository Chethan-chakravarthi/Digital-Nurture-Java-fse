import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: Student[] = [];
  loading = true;
  error = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {

    console.log('Component Loaded');

    this.studentService.getStudents().subscribe({
      next: (data) => {
        console.log('API Success');
        console.log(data);

        this.students = data;
        this.loading = false;
      },
      error: (err) => {
        console.log('API Failed');
        console.error(err);

        this.error = 'Failed to load students';
        this.loading = false;
      }
    });
  }

}
