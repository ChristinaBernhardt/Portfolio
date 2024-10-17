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
      text: `
        <h3>2 / 3</h3>
        <h4>Mermaid</h4>
        <div class="tags">
          <span>HTML</span> | 
          <span>CSS</span> | 
          <span>JavaScript / OOP</span>
        </div>
        <p>A swim-and-shoot game based on an object-oriented approach. Help the mermaid to find pearls and stars to fight against a variety of fish and collect the golden key to open the treasure chest in the end.</p>
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
        <h4>1 / 3</h4>
       <h4>Mermaid</h4>
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
      <h4>Mermaid</h4>
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
