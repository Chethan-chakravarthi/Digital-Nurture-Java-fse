import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './components/course-detail/course-detail';
import { StudentProfile } from './components/student-profile/student-profile';
import { NotFound } from './components/not-found/not-found';
import { CourseOverview } from './components/course-overview/course-overview';
import { CourseSyllabus } from './components/course-syllabus/course-syllabus';
import { EditProfile } from './components/edit-profile/edit-profile';
import { StudentList } from './student-list/student-list';
import { AddStudent } from './add-student/add-student';
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'home', component: Home },

  { path: 'courses', component: CourseList },

  {
    path: 'courses/:id',
    component: CourseDetail,
    children: [
      {
        path: 'overview',
        component: CourseOverview
      },
      {
        path: 'syllabus',
        component: CourseSyllabus
      }
    ]
  },

  { path: 'profile', component: StudentProfile },

  {
    path: 'edit-profile',
    component: EditProfile,
    canDeactivate: [unsavedChangesGuard]
  },

  {
    path: 'students',
    component: StudentList
  },

  {
    path: 'add-student',
    component: AddStudent
  },

  {
    path: 'student',
    loadComponent: () =>
      import('./modules/student/student-home/student-home')
        .then(m => m.StudentHome),
    canActivate: [authGuard]
  },

  { path: '**', component: NotFound }

];
