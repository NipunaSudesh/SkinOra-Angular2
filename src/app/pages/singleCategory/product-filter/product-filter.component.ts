import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const CATEGORIES = [
  { name: 'Baby Care', slug: 'baby-care' },
  { name: 'Body Care', slug: 'body-care' },
  { name: 'Face Care', slug: 'face-care' },
  { name: 'Hair Care', slug: 'hair-care' },
  { name: 'Sunscreens', slug: 'sunscreens' },
  { name: 'Serums', slug: 'serums' },
  { name: "Men's Grooming", slug: 'mens-grooming' },
];

const COUNTRIES = [
  { name: 'Australia', code: 'AU' },
  { name: 'Canada', code: 'CA' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'Japan', code: 'JP' },
  { name: 'Singapore', code: 'SG' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'United States', code: 'US' },
];

const BRANDS = [
  "L'Oréal Men Expert",
  'Gillette',
  'Nivea',
  'Dove',
  'CeraVe',
  'Cetaphil',
  'Garnier',
  'OGX',
  'Old Spice',
  'Brut',
];

export interface ProductFilters {
  category: string;
  country: string;
  brands: string[];
  inStock: boolean;
}

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent {
  @Input() hideCategory = false;

  @Input() filters: ProductFilters = {
    category: '',
    country: '',
    brands: [],
    inStock: false,
  };

  @Output() filtersChange = new EventEmitter<ProductFilters>();

  readonly categories = CATEGORIES;
  readonly countries = COUNTRIES;
  readonly brands = BRANDS;

  toggleBrand(brand: string): void {
    const current = [...this.filters.brands];
    const index = current.indexOf(brand);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(brand);
    }
    this.filters = { ...this.filters, brands: current };
    this.filtersChange.emit(this.filters);
  }

  clearAll(): void {
    this.filters = {
      category: '',
      country: '',
      brands: [],
      inStock: false,
    };
    this.filtersChange.emit(this.filters);
  }
}