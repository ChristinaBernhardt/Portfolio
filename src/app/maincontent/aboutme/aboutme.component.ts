/**
 * @module AboutmeComponent
 * @description
 * The AboutmeComponent displays the "About Me" section of the application
 * and provides functionality to scroll smoothly to the contact section of the page.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  /**
   * Scrolls smoothly to the "Contact" section of the page if it exists.
   */
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

