import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('elPolloLocoText', { static: true }) elPolloLocoText!: TemplateRef<any>;
  @ViewChild('pokedexText', { static: true }) pokedexText!: TemplateRef<any>;
  @ViewChild('joinText', { static: true }) joinText!: TemplateRef<any>;

  sectionsData = [
    {
      imgSrc: '/assets/startscreen_1-min.png',
      textId: 'elPolloLocoText',
      imgWidth: '400px',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      textId: 'pokedexText',
      imgWidth: '300px',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      textId: 'joinText',
      imgWidth: '400px',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getTemplate(textId: string): TemplateRef<any> | null {
    return this[textId as keyof this] as TemplateRef<any> | null;
  }
}
