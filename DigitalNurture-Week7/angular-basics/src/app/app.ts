import { Component } from '@angular/core';
import { StudentManagementComponent } from './student-management/student-management';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentManagementComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}

