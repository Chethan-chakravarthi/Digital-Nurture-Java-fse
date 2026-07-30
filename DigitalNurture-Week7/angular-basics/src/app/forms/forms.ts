import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class FormsComponent {
  student = {
    name: '',
    email: '',
    course: ''
  };

  submitForm() {
    alert('Form Submitted Successfully!');
  }
}
