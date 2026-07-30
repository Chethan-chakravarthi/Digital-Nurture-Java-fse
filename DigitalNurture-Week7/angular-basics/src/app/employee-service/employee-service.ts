import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-service.html',
  styleUrl: './employee-service.css'
})
export class EmployeeServiceComponent {
  employee: any;

  constructor(private empService: EmployeeService) {
    this.employee = this.empService.getEmployee();
  }
}
