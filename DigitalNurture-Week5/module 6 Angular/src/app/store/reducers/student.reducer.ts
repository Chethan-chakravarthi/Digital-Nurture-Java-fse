import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/student.state';
import {
  addStudentSuccess,
  loadStudents,
  loadStudentsFailure,
  loadStudentsSuccess,
  removeStudentSuccess
} from '../actions/student.actions';

export const studentReducer = createReducer(
  initialState,
  on(loadStudents, (state) => ({ ...state, loading: true, error: null })),
  on(loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    loading: false,
    error: null
  })),
  on(loadStudentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(addStudentSuccess, (state, { student }) => ({
    ...state,
    students: [...state.students, student],
    loading: false,
    error: null
  })),
  on(removeStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter((student) => student.id !== id),
    loading: false,
    error: null
  }))
);
