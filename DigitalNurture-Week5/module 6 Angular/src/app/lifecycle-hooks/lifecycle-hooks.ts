import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  templateUrl: './lifecycle-hooks.html',
  styleUrl: './lifecycle-hooks.css'
})
export class LifecycleHooks implements OnInit {

  message = "";

  constructor() {
    console.log("Constructor Called");
  }

  ngOnInit(): void {
    this.message = "Welcome! ngOnInit() executed successfully.";
    console.log("ngOnInit Called");
  }

}
