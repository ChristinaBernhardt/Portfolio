/**
 * This component represents the skills section of the application.
 * It is a standalone component with its own template and styles.
 */
import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
