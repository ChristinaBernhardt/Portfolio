/**
 * @module AppComponent
 * @description
 * The AppComponent is the root component of the Angular application. It provides the primary structure of the app
 * by including the router outlet for navigation and the shared header and footer components.
 */

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // This is the root standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,  // Enables routing in the application
    HeaderComponent,  // Includes the header component
    FooterComponent   // Includes the footer component
  ],
})
export class AppComponent {
  /**
   * The title of the application, used for reference or display purposes.
   * @type {string}
   */
  title = 'christinasportfolio';


}
