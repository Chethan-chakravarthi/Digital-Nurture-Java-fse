import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { StudentService } from './student.service';
import { Student } from '../models/student.model';

describe('StudentService', () => {
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch students via GET', () => {
    const mockStudents: Student[] = [
      { id: 1, name: 'Alice', username: 'alice', email: 'alice@example.com' }
    ];

    service.getStudents().subscribe((students) => {
      expect(students).toEqual(mockStudents);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents);
  });

  it('should create a student via POST', () => {
    const newStudent: Student = {
      id: 0,
      name: 'Bob',
      username: 'bob',
      email: 'bob@example.com'
    };

    service.addStudent(newStudent).subscribe((student) => {
      expect(student).toEqual({ ...newStudent, id: 101 });
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('POST');
    req.flush({ ...newStudent, id: 101 });
  });
});
