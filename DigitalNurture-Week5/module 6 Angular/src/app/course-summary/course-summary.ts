import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary.html',
  styleUrl: './course-summary.css',
})
export class CourseSummary {

  @Input() title: string = '';

  @Input() value: number = 0;

}
