import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { StudentService } from '../../services/student.service';
import {
  addStudent,
  addStudentSuccess,
  loadStudents,
  loadStudentsFailure,
  loadStudentsSuccess
} from '../actions/student.actions';

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map((students) => loadStudentsSuccess({ students })),
          catchError((error) => of(loadStudentsFailure({ error: error.message })))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      mergeMap(({ student }) =>
        of(student).pipe(
          map((savedStudent) => addStudentSuccess({ student: savedStudent }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}
}
