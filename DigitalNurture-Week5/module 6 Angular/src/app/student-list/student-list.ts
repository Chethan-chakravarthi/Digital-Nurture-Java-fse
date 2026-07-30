import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { loadStudents } from '../store/actions/student.actions';
import { selectAllStudents, selectStudentsError, selectStudentsLoading } from '../store/selectors/student.selectors';
import { AppState } from '../store';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students$: Observable<Student[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.students$ = this.store.select(selectAllStudents);
    this.loading$ = this.store.select(selectStudentsLoading);
    this.error$ = this.store.select(selectStudentsError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

}
