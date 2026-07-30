import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/student.model';

export const loadStudents = createAction('[Student] Load Students');

export const loadStudentsSuccess = createAction(
  '[Student] Load Students Success',
  props<{ students: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student] Load Students Failure',
  props<{ error: string }>()
);

export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: Student }>()
);

export const addStudentSuccess = createAction(
  '[Student] Add Student Success',
  props<{ student: Student }>()
);

export const removeStudent = createAction(
  '[Student] Remove Student',
  props<{ id: number }>()
);

export const removeStudentSuccess = createAction(
  '[Student] Remove Student Success',
  props<{ id: number }>()
);
