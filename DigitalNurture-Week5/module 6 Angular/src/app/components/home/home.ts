import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CourseSummary } from '../../course-summary/course-summary';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CourseSummary
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  getTotalCourses(): number {
    return this.courses.length;
  }

  getPassedCourses(): number {
    return this.courses.filter(c => c.gradeStatus === 'passed').length;
  }

  getPendingCourses(): number {
    return this.courses.filter(c => c.gradeStatus === 'pending').length;
  }

  getFailedCourses(): number {
    return this.courses.filter(c => c.gradeStatus === 'failed').length;
  }

}
