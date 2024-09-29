import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],  // <-- Füge den CommonModule-Import hier hinzu
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})

export class PortfolioComponent implements OnInit {
  sectionsData = [
    {
      imgSrc: '/assets/startscreen_1.png',
      text: 'This is the text for the first section. The image is on the right.',
      imgWidth: '500px',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      text: 'This is the text for the second section. The image is on the left.',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      text: 'This is the text for the third section. The image is on the right.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
