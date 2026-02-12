
import { Component, OnInit } from '@angular/core';
import { CommonModule ,NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { IMAGES } from '../../../../assets/images';
import { IMAGES } from '../../../../assets/images';

@Component({
  selector: 'app-t-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatIconModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './t-navbar.component.html',
})
export class TNavbarComponent implements OnInit {
  searchTerm: string = '';
  showMobileSearch: boolean = false;
  showMobileMenu: boolean = false;
  cartLength: number = 0;
 images = IMAGES;
  categories = [
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

  constructor(private router: Router) {}

  ngOnInit() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartLength = cart.length;
  }

  handleSearch() {
    if (!this.searchTerm.trim()) return;
    this.router.navigate(['/search'], { queryParams: { query: this.searchTerm } });
    this.showMobileSearch = false;
  }

  handleCart() {
    this.router.navigate(['/cart']);
  }

  handleUser() {
    const user = localStorage.getItem('user');
    this.router.navigate([user ? '/profile' : '/login']);
  }
}
