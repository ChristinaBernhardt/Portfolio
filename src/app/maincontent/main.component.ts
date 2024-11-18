import { Component } from '@angular/core';
import { IamComponent } from './iam/iam.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IamComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  toggleMenu() {
    const menu = document.getElementById('burger-menu-content');
    if (menu && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  }
}
