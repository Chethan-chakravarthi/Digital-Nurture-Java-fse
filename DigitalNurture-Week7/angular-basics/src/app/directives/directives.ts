import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  isLoggedIn = true;

  students = [
    'Chethan',
    'Rahul',
    'Priya',
    'Kiran',
    'Anjali'
  ];
}
