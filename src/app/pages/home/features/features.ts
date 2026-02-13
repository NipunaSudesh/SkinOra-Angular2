import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  imports: [CommonModule, MatIconModule],
  templateUrl: './features.html',
})
export class Features {
  features  = [
     {
      title: 'Fast Delivery',
      description: 'Island-wide next-day delivery',
      icon: 'local_shipping',
      // color: 'text-[#1E3A8A]', 
    },
    {
      title: '100% Authentic',
      description: 'Dermatologist approved products',
      icon: 'verified',
      color: 'text-[#1E3A8A]',
    },
    {
      title: 'Natural Ingredients',
      description: 'Safe & skin-friendly formulas',
      icon: 'eco',
      color: 'text-[#1E3A8A]',
    },
    {
      title: 'Expert Support',
      description: 'Beauty advice when you need it',
      icon: 'support_agent',
      color: 'text-[#1E3A8A]',
    },
    {
      title: 'Easy Payments',
      description: 'Cash on delivery & carts',
      icon: 'payments',
      color: 'text-[#1E3A8A]',
    },
  ]
}
