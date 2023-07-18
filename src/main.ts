import 'zone.js/dist/zone';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'test-el',
  standalone: true,
  imports: [CommonModule],
  template: `<div>hi< {{name}}/div>`,
})
export class TestEl {
  @Input({ required: true }) name?: string;

  constructor() {
    console.log('name value is: ', this.name);
  }
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TestEl],
  template: `
    <test-el [name]="name"/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
