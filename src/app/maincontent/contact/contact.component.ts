import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,  // Standalone-Komponente
  imports: [FormsModule],  // FormsModule wird hier importiert
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  onSubmit() {
    console.log('Form submitted');
  }
}
