/**
 * @module IamComponent
 * @description
 * The IamComponent represents a section or page in the application.
 * It serves as a placeholder or standalone component without additional logic or functionality.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-iam',
  standalone: true,  // This is a standalone component
  imports: [],  // No additional modules are imported
  templateUrl: './iam.component.html',
  styleUrl: './iam.component.scss'
})
export class IamComponent {
  // This component currently has no properties or methods.
}
