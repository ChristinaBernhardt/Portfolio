/**
 * @module PrivacyComponent
 * @description
 * The PrivacyComponent represents the privacy policy section of the application.
 * It is a standalone component with its own template and styles, providing information
 * about the application's privacy practices.
 */

import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements AfterViewInit {
  private windowRef: Window = window;

  constructor(private router: Router) {}

  /**
   * Scrolls to top after the view is fully initialized.
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.windowRef.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }

  /**
   * Scrolls the page to the top with a smooth animation and redirects to the homepage.
   */
  scrollToTopAndRedirect(): void {
    this.windowRef.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigateByUrl('/');
  }
}
