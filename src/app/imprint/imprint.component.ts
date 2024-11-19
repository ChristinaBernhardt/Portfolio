import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  private windowRef: Window = window;

  constructor(private router: Router) {}

  scrollToTopAndRedirect() {
    this.windowRef.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigateByUrl('/');
  }}
