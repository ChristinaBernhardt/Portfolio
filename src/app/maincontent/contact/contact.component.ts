/**
 * @module ContactComponent
 * @description
 * The ContactComponent manages a contact form with functionality to submit the form,
 * display a confirmation dialog, and reset the form after submission.
 */

import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,  // This is a standalone component
  imports: [FormsModule, NgIf],  // Required Angular modules
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /**
   * Controls the visibility of the confirmation dialog.
   * @type {boolean}
   */
  showDialog = false;

  /**
   * Reference to the contact form in the template.
   * Used for form validation and resetting the form.
   * @type {NgForm}
   */
  @ViewChild('contactForm', {static: true}) contactForm!: NgForm;

  /**
   * Handles the submission of the contact form.
   * Displays a confirmation dialog for 3 seconds, then hides it and resets the form.
   */
  onSubmit(): void {
    this.showDialog = true;
    setTimeout(() => {
      this.showDialog = false;
      if (this.contactForm) {
        this.contactForm.resetForm(); // Reset the form after submission
      }
    }, 3000);
  }
}
