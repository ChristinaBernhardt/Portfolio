import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- Füge den CommonModule-Import hier hinzu
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})

export class PortfolioComponent implements OnInit {
  sectionsData = [
    {
      imgSrc: '/assets/startscreen_1.png',
      text: `
        <h3>1 / 3</h3>
        <h4>El Pollo Loco</h4>
        <div class="tags">
          <span>HTML</span> |
          <span>CSS</span> |
          <span>JavaScript</span>
        </div>
        <p>A run-and-shoot game based on an object-oriented approach. </p>
        <div class="buttons">
          <button>Try it out</button>
          <button>Github</button>
        </div>
      `,
      imgWidth: '400px',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      text: `
        <h4>2 / 3</h4>
       <h4>Pokedex</h4>
        <div class="tags">
          <span>Angular</span> |
          <span>TypeScript</span> |
          <span>NodeJS</span>
        </div>
        <p>Project description goes here. Replace this text with a description of your project or work.</p>
        <div class="buttons">
          <button>Try it out</button>
          <button>Github</button>
        </div>
      `,
      imgWidth: '300px',
    },
    {
      imgSrc: 'https://via.placeholder.com/400',
      text: `
        <h3>3 / 3</h3>
      <h4>Join</h4>
        <div class="tags">
          <span>React</span> |
          <span>Redux</span> |
          <span>Firebase</span>
        </div>
        <p>Another project description. Replace this text with your custom content.</p>
        <div class="buttons">
          <button>Try it out</button>
          <button>Github</button>
        </div>
      `,
      imgWidth: '400px',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
