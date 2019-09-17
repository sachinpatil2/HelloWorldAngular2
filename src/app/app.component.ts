import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
	console.log('This is demo');
  }

  title: string = 'My First Angular App';
  demoStr: string = 'This is demo string';
}
