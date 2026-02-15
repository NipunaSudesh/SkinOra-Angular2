// src/app/pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Features } from '../../pages/home/features/features';         
import { ContactComponent } from '../contact/contact.component';               
import { CustomerTestimonials} from '../../pages/home/customer-testimonials/customer-testimonials'; 
import { IMAGES } from '../../../../public/images';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    Features,
    ContactComponent,
    CustomerTestimonials
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {
images=IMAGES
}