import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private windowRef: Window = window;

  constructor(private router: Router) {}

  scrollToTopAndRedirect() {
    this.windowRef.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigateByUrl('/');
  }

  toggleMenu() {
    const menu = document.getElementById('burger-menu-content');
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  }
}
