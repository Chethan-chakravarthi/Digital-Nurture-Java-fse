import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployee() {
    return {
      id: 101,
      name: 'Chethan Chakravarthi K',
      department: 'CSE',
      role: 'Java Full Stack Trainee'
    };
  }
}
