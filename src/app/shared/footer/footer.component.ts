/**
 * @module FooterComponent
 * @description
 * The FooterComponent represents the footer section of the application.
 * It is a standalone component with its own template and styles, typically
 * used to display copyright information, links, or other footer-related content.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,  // This is a standalone component
  imports: [],  // No additional modules are imported
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // This component currently has no properties or methods.
}
