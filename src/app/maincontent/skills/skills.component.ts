/**
 * @module SkillsComponent
 * @description
 * The SkillsComponent represents the skills section of the application.
 * It is a standalone component with its own template and styles, and it uses
 * the Angular RouterModule for potential navigation functionality.
 */

import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-skills',
  standalone: true,  // This is a standalone component
  imports: [RouterModule],  // Imports Angular RouterModule
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  // This component currently has no properties or methods.
}
