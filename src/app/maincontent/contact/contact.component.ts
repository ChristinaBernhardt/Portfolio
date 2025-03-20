/**
 * @module ContactComponent
 * @description
 * The ContactComponent provides a contact form with the ability to submit data via HTTP,
 * display a confirmation dialog upon successful submission, and reset the form afterward.
 */

import {Component, inject, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,  // Declares this as a standalone component
  imports: [FormsModule, NgIf, RouterLink],  // Required Angular modules
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
   * Injects the HttpClient for handling HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * Holds the data entered by the user in the contact form.
   */
  contactData = {
    name: "",
    email: "",
    message: "",
  };

  /**
   * Reference to the contact form in the template.
   * Used for form validation and resetting the form.
   */
  @ViewChild('contactForm', {static: true}) contactForm!: NgForm;

  /**
   * Configuration for the HTTP POST request.
   */
  post = {
    endPoint: 'https://christina-bernhardt.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles the submission of the contact form.
   * If the form is valid, it sends the data via an HTTP POST request.
   * Upon success, a confirmation dialog is displayed for 3 seconds before resetting the form.
   * If the form is invalid, a warning is logged.
   *
   * @param {NgForm} ngForm - The contact form instance.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.erzeugePayload())
        .subscribe({
          next: () => {
            this.showDialog = true;
            setTimeout(() => this.showDialog = false, 3000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Send post complete'),
        });
    } else {
      console.warn('Form is invalid');
    }
  }

  private erzeugePayload() {
    return JSON.stringify(this.contactData);
  }
}
