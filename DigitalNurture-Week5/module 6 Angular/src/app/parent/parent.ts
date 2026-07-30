import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

  name = 'Chethan';
  message = '';

  receiveMessage(msg: string) {
    this.message = msg;
  }

}
