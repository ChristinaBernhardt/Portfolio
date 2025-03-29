/**
 * @module ImprintComponent
 * @description
 * The ImprintComponent handles the display of the imprint page and provides functionality
 * to scroll to the top of the page and navigate to the homepage.
 */

import {Component, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit{
  /**
   * A reference to the global `window` object.
   * Used for performing actions like scrolling.
   * @private
   */
  private windowRef: Window = window;

  /**
   * Creates an instance of the ImprintComponent.
   *
   * @param {Router} router - Angular Router for navigation.
   */
  constructor(private router: Router) {
  }

  /**
   * Scrolls to top after the view is fully initialized.
   */
  ngAfterViewInit(): void {
    // Delay to ensure DOM is ready
    setTimeout(() => {
      this.windowRef.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }

  /**
   * Scrolls the page to the top with a smooth animation and redirects to the homepage.
   */
  scrollToTopAndRedirect(): void {
    this.windowRef.scrollTo({top: 0, behavior: 'smooth'});
    this.router.navigateByUrl('/');
  }
}
