/**
 * @module HeaderComponent
 * @description
 * The HeaderComponent represents the header section of the application.
 * It provides navigation functionality, a method to scroll to the top and redirect
 * to the homepage, and a method to toggle the visibility of a burger menu.
 */

import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,  // This is a standalone component
  imports: [RouterModule, NgOptimizedImage, NgIf],  // Imports Angular RouterModule and optimized image handling
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Reference to the global `window` object, used for scrolling actions.
   * @private
   * @type {Window}
   */
  private windowRef: Window = window;

  /**
   * Initializes the HeaderComponent.
   *
   * @param {Router} router - Angular Router for navigation.
   */
  constructor(private router: Router) {
  }

  /**
   * Scrolls to the top of the page with a smooth animation and redirects to the homepage.
   */
  scrollToTopAndRedirect(): void {
    this.windowRef.scrollTo({top: 0, behavior: 'smooth'});
    this.router.navigateByUrl('/');
  }

  /**
   * Toggles the visibility of the burger menu.
   * If the menu is currently visible, it will be hidden; otherwise, it will be shown.
   */
  toggleMenu(): void {
    const menu = document.getElementById('burger-menu-content');
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  }

  selectedLanguage: 'de' | 'en' | null = null;

  ngOnInit() {
    const lang = navigator.language;
    this.selectedLanguage = lang.startsWith('de') ? 'de' : 'en';
  }

  openExternalWebsiteDe() {
    this.selectedLanguage = 'de';
    window.location.href = 'https://www.christina-bernhardt.com/Portfolio/de';
  }

  openExternalWebsiteEn() {
    this.selectedLanguage = 'en';
    window.location.href = 'https://www.christina-bernhardt.com/Portfolio/en-US';
  }
}
