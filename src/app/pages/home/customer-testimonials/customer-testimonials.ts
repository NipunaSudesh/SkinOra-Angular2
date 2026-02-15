import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-testimonials',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './customer-testimonials.html',
})
export class CustomerTestimonials {
  testimonials = [
    {
      title: 'Express Delivery',
      message:
        'I placed my order easily and received it very fast. The products were excellent and well packed. Highly recommended!',
      name: 'Sachini Kaushalya',
      image: 'https://i.pravatar.cc/150?img=32',
    },
    {
      title: '100% Original Products',
      message:
        'I have purchased several products and all of them were original with great results. Thank you for the trusted service.',
      name: 'Samadhi Divyanjali',
      image: 'https://i.pravatar.cc/150?img=47',
    },
    {
      title: 'High Quality Products',
      message:
        'The service level is outstanding and the product quality is amazing. I am very satisfied and will order again.',
      name: 'Shabnam Roomy',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      title: 'Best Customer Service',
      message:
        'Their customer support is very friendly and helpful. They always recommend the right products with great results.',
      name: 'B G Ruvindya Rashmi',
      image: 'https://i.pravatar.cc/150?img=12',
    },
  ];
}
