import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from "../../app.routes";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AppRoutingModule
  ],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
