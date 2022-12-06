import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'Mi Portfolio Web';
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = 'assets/styles.css';
  }
}
