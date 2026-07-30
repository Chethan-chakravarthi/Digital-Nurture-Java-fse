import { ActionReducerMap } from '@ngrx/store';
import { StudentState } from './state/student.state';
import { studentReducer } from './reducers/student.reducer';

export interface AppState {
  students: StudentState;
}

export const reducers: ActionReducerMap<AppState> = {
  students: studentReducer
};
