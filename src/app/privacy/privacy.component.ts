/**
 * @module PrivacyComponent
 * @description
 * The PrivacyComponent represents the privacy policy section of the application.
 * It is a standalone component with its own template and styles, providing information
 * about the application's privacy practices.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,  // This is a standalone component
  imports: [],  // No additional modules are imported
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  // This component currently has no properties or methods.
}
