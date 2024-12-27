import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
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
    this.showDialog = true;
    setTimeout(() => {
      this.showDialog = false;
      if (this.contactForm) {
        this.contactForm.resetForm(); // Formular zurücksetzen
      }
    }, 3000);
  }
}
