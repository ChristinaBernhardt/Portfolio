/**
 * @module PortfolioComponent
 * @description
 * The PortfolioComponent displays a portfolio of projects, each with an image, description,
 * and links to external resources. It includes functionality to dynamically retrieve templates
 * and navigate to project-specific URLs.
 */

import {Component, OnInit, TemplateRef, ViewChild, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  /**
   * Template reference for the "El Pollo Loco" project description.
   * @type {TemplateRef<any>}
   */
  @ViewChild('elPolloLocoText', {static: true}) elPolloLocoText!: TemplateRef<any>;

  /**
   * Template reference for the "Pokedex" project description.
   * @type {TemplateRef<any>}
   */
  @ViewChild('pokedexText', {static: true}) pokedexText!: TemplateRef<any>;

  /**
   * Template reference for the "Join" project description.
   * @type {TemplateRef<any>}
   */
  @ViewChild('joinText', {static: true}) joinText!: TemplateRef<any>;

  /**
   * Data for the portfolio sections, including image source, text template ID, and image width.
   * @type {Array<{ imgSrc: string, textId: string, imgWidth: string }>}
   */
  sectionsData = [
    {
      imgSrc: 'assets/ElPolloLoco.png',
      textId: 'elPolloLocoText',
      imgWidth: '400px',
    },
    {
      imgSrc: 'assets/Join.png',
      textId: 'pokedexText',
      imgWidth: '300px',
    },
    {
      imgSrc: 'assets/Pokedex.png',
      textId: 'joinText',
      imgWidth: '400px',
    },
  ];

  /**
   * Initializes the PortfolioComponent.
   */
  constructor() {
  }

  /**
   * Lifecycle hook that is called after the component is initialized.
   */
  ngOnInit(): void {
  }
ngAfterViewInit(): void {
  const images = document.querySelectorAll('.section-image img');

  console.log('Gefundene Bilder:', images);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Nach dem ersten Einblenden nicht mehr beobachten
        }
      });
    },
    { threshold: 0.2 } // Animation startet, wenn 20% des Bildes sichtbar sind
  );

  images.forEach((img) => observer.observe(img));
}
  /**
   * Retrieves the template associated with the given text ID.
   *
   * @param {string} textId - The ID of the text template to retrieve.
   * @returns {TemplateRef<any> | null} - The matching template or null if not found.
   */
  getTemplate(textId: string): TemplateRef<any> | null {
    return this[textId as keyof this] as TemplateRef<any> | null;
  }

  /**
   * Opens the GitHub profile in a new browser tab.
   */
  openGithub(): void {
    window.open('https://github.com/ChristinaBernhardt', '_blank');
  }

  /**
   * Opens the "El Pollo Loco" project in a new browser tab.
   */
  openPolloLoco(): void {
    window.open('https://christina-bernhardt.developerakademie.net/ElPolloLoco', '_blank');
  }

  /**
   * Opens the "Pokedex" project in a new browser tab.
   */
  openPokedex(): void {
    window.open('https://christina-bernhardt.developerakademie.net/Pokedex', '_blank');
  }

  /**
   * Opens the "Join" project in a new browser tab.
   */
  openJoin(): void {
    window.open('https://christina-bernhardt.developerakademie.net/Join', '_blank');
  }

  openGithubPolloLoco() {
    window.open('https://github.com/ChristinaBernhardt/ElPolloLoco', '_blank');
  }


  openGithubJoin() {
    window.open('https://github.com/ChristinaBernhardt/Join', '_blank');
  }

  openGithubPokedex() {
    window.open('https://github.com/ChristinaBernhardt/Pokedex', '_blank');
  }
}
