import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {

    return [

      {
        id: 1,
        name: 'Java Full Stack',
        code: 'JFS101',
        credits: 4,
        gradeStatus: 'passed'
      },

      {
        id: 2,
        name: 'Angular',
        code: 'ANG201',
        credits: 3,
        gradeStatus: 'passed'
      },

      {
        id: 3,
        name: 'Spring Boot',
        code: 'SPR301',
        credits: 4,
        gradeStatus: 'pending'
      },

      {
        id: 4,
        name: 'React',
        code: 'REA401',
        credits: 3,
        gradeStatus: 'failed'
      }

    ];

  }

}
