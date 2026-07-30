import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-crud.html',
  styleUrl: './student-crud.css'
})
export class StudentCrudComponent {

  students: any[] = [];

  student = {
    id: '',
    name: '',
    course: ''
  };

  addStudent() {
    this.students.push({ ...this.student });

    this.student = {
      id: '',
      name: '',
      course: ''
    };
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

}
