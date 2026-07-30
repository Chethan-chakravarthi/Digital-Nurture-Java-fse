import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AddStudent } from './add-student';
import { StudentService } from '../../services/student.service';

describe('AddStudent', () => {
  let component: AddStudent;
  let fixture: ComponentFixture<AddStudent>;
  let studentService: { addStudent: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    studentService = {
      addStudent: vi.fn().mockReturnValue(of({ id: 101, name: 'Bob', username: 'bob', email: 'bob@example.com' }))
    };

    await TestBed.configureTestingModule({
      imports: [AddStudent, ReactiveFormsModule],
      providers: [{ provide: StudentService, useValue: studentService }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require all form fields before submit', () => {
    component.studentForm.patchValue({ name: '', username: '', email: '' });
    component.saveStudent();
    expect(component.responseMessage).toContain('Please fill in');
    expect(studentService.addStudent).not.toHaveBeenCalled();
  });

  it('should submit a student when form is valid', () => {
    component.studentForm.patchValue({ name: 'Bob', username: 'bob', email: 'bob@example.com' });
    component.saveStudent();
    expect(studentService.addStudent).toHaveBeenCalled();
  });
});
