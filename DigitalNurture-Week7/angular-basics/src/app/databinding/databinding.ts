import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  name: string = 'Chethan Chakravarthi K';
  course: string = 'Java Full Stack';
  count: number = 0;

  increment() {
    this.count++;
  }
}
