/**
 * @module ContactComponent
 * @description
 * The ContactComponent manages a contact form with functionality to submit the form,
 * display a confirmation dialog, and reset the form after submission.
 */

import {Component, inject, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,  // This is a standalone component
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
http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",

  }


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



  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.showDialog = true;
      setTimeout(() => this.showDialog = false, 3000);
      ngForm.resetForm();
    }
  }
}
