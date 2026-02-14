import { IMAGES } from '../../../../public/images';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule   
  ],
  templateUrl: './contact.component.html',

})
export class ContactComponent {
images=IMAGES
  // Form data (two-way binding with ngModel)
  name: string = '';
  email: string = '';
  message: string = '';

  // Success message after submit
  submitMessage: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();

    this.submitMessage = "Thank you for contacting us! We’ll get back to you soon 😊";

    // Clear form & message after 3 seconds
    setTimeout(() => {
      this.submitMessage = '';
      this.name = '';
      this.email = '';
      this.message = '';
    }, 3000);
  }
}