/**
 * @module MainComponent
 * @description
 * The MainComponent serves as the main container for the application.
 * It imports and integrates various sections such as "I Am", "About Me",
 * "Skills", "Portfolio", and "Contact". The component also includes functionality
 * to toggle the visibility of a burger menu.
 */

import {Component} from '@angular/core';
import {IamComponent} from './iam/iam.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,  // This is a standalone component
  imports: [IamComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent],  // Imported child components
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  /**
   * Toggles the visibility of the burger menu.
   * If the menu is currently visible, it will be hidden.
   */
  toggleMenu(): void {
    const menu = document.getElementById('burger-menu-content');
    if (menu && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  }
}
