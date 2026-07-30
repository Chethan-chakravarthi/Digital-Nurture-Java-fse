import { Student } from '../../models/student.model';

export interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

export const initialState: StudentState = {
  students: [],
  loading: false,
  error: null
};
