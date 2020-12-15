import { Component } from '@angular/core';
// Decorator
@Component({
  selector: 'app-root', // html <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Todo List';

  constructor() {
    // console.log(123);
    // this.title = 'Todo';
  }
}
