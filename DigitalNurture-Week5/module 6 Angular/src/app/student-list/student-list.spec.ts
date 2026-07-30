import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { StudentList } from './student-list';
import { loadStudents } from '../../store/actions/student.actions';
import { AppState } from '../../store';

describe('StudentList', () => {
  let component: StudentList;
  let fixture: ComponentFixture<StudentList>;
  let store: { select: ReturnType<typeof vi.fn>; dispatch: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    store = {
      select: vi.fn().mockReturnValue(of([])),
      dispatch: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [StudentList],
      providers: [{ provide: Store, useValue: store }]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should dispatch loadStudents on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadStudents());
  });
});

