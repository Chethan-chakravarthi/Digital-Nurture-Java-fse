import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from '../state/student.state';

export const selectStudentState = createFeatureSelector<StudentState>('students');

export const selectAllStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsLoading = createSelector(
  selectStudentState,
  (state) => state.loading
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state) => state.error
);
