import {Component, ViewChild} from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,  // Standalone-Komponente
  imports: [FormsModule, NgIf],  // FormsModule wird hier importiert
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showDialog = false; // Steuerung für den Dialog

  @ViewChild('contactForm', {static: true}) contactForm!: NgForm; // Formular-Referenz

  onSubmit() {
    console.log('Form submitted');

    // Dialog anzeigen
    this.showDialog = true;

    // Dialog nach 3 Sekunden schließen und Formular zurücksetzen
    setTimeout(() => {
      this.showDialog = false;
      if (this.contactForm) {
        this.contactForm.resetForm(); // Formular zurücksetzen
      }
    }, 3000);
  }
}
