import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() studentName: string = "";

  @Output() sendMessage = new EventEmitter<string>();

  sendToParent() {
    this.sendMessage.emit('Hello Parent! Message received from Child.');
  }

}
