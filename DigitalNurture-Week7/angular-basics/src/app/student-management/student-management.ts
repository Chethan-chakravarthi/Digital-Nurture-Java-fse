import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-management.html',
  styleUrl: './student-management.css'
})
export class StudentManagementComponent {

  searchText = '';

  editIndex = -1;

  student = {
    id: '',
    name: '',
    course: '',
    email: ''
  };

  students: any[] = [];

  addOrUpdateStudent() {

    if (this.editIndex === -1) {

      this.students.push({ ...this.student });

    } else {

      this.students[this.editIndex] = { ...this.student };

      this.editIndex = -1;

    }

    this.student = {
      id: '',
      name: '',
      course: '',
      email: ''
    };

  }

  editStudent(index: number) {

    this.student = { ...this.students[index] };

    this.editIndex = index;

  }

  deleteStudent(index: number) {

    this.students.splice(index, 1);

  }

  get filteredStudents() {
    if (!this.searchText) {
      return this.students;
    }
    return this.students.filter(s =>
      s.id.includes(this.searchText) ||
      s.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
