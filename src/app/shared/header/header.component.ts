import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Globale window-Referenz
  private windowRef: Window = window;

  scrollToTopAndRedirect() {
    this.windowRef.scrollTo({ top: 0, behavior: 'smooth' });
    this.windowRef.location.href = '/';
  }

  toggleMenu() {
    const menu = this.windowRef.document.getElementById('burger-menu-content');
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  }
}
