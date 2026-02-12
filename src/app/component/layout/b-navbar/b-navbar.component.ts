import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface Category {
  label: string;
  slug: string;
}

@Component({
  selector: 'app-b-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './b-navbar.component.html',
})
export class BNavbarComponent {
  categories: Category[] = [
    { label: 'All Products', slug: '/all-products' },
    { label: 'Baby Care', slug: '/product-category/baby-care' },
    { label: 'Body Care', slug: '/product-category/body-care' },
    { label: 'Face Care', slug: '/product-category/face-care' },
    { label: 'Hair Care', slug: '/product-category/hair-care' },
    { label: 'Sunscreens', slug: '/product-category/sunscreens' },
    { label: 'Serums', slug: '/product-category/serums' },
    { label: 'Mens Grooming', slug: '/product-category/mens-grooming' },
    { label: 'About Us', slug: '/about' },
  ];
}
