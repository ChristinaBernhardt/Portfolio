import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { IamComponent } from './main-content/iam/iam.component';
import { AboutmeComponent } from './main-content/aboutme/aboutme.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactComponent } from './main-content/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, IamComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'christinasportfolio';
}
