import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  studentName = '';
  courseName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.studentName = params['student'];

      this.courseName = params['course'];

    });

  }

}
