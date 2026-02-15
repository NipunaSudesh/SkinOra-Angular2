import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductCartComponent } from '../../../component/cart/product-cart/product-cart.component';
import { HeaderComponent } from '../../../component/theme/header.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { MobileFilterDrawerComponent } from '../mobile-filter-drawer/mobile-filter-drawer.component';
import { environment } from '../../../../environments/environment';

export interface ProductFilters {
  category: string;
  country: string;
  brands: string[];
  inStock: boolean;
  minPrice?: string;
  maxPrice?: string;
}

interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  imageUrl: string;
  rating: number;
  oldPrice?: number;
  price: number;
  reviewCount: number;
  categorySlug: string;
  brand: string;
  country: string;
  stockStatus: string;
}

const PRODUCTS_PER_PAGE = 8;

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ProductCartComponent,
    HeaderComponent,
    ProductFilterComponent,
    MobileFilterDrawerComponent,
  ],
  templateUrl: './category-product.component.html',
})
export class CategoryProductComponent implements OnInit, OnChanges {
  @Input() slug?: string;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentPage = 1;
  showMobileFilter = false;
  isLoading = false;
  errorMessage: string | null = null;

  filters: ProductFilters = {
    category: '',
    country: '',
    brands: [],
    inStock: false,
    minPrice: '',
    maxPrice: ''
  };

  private effectiveSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const routeSlug = params.get('slug') || '';
      if (!this.slug) {
        this.setEffectiveSlug(routeSlug);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['slug']) {
      this.setEffectiveSlug(this.slug || '');
    }
  }

  private setEffectiveSlug(value: string) {
    const newSlug = (value || '').trim();
    if (newSlug !== this.effectiveSlug) {
      this.effectiveSlug = newSlug;
      if (this.effectiveSlug) {
        this.fetchProducts();
      } else {
        this.products = [];
        this.filteredProducts = [];
      }
    }
  }

  async fetchProducts() {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const res = await axios.get<Product[]>(`${environment.SKINORA_API_URL}/api/products`);
      this.products = res.data.filter(p => p.categorySlug === this.effectiveSlug);
      this.applyFilters();
      this.currentPage = 1;
    } catch (err: any) {
      console.error('Fetch error:', err);
      this.errorMessage = 'Failed to load products.';
      this.products = [];
    } finally {
      this.isLoading = false;
    }
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      if (this.filters.brands.length && !this.filters.brands.includes(p.brand)) return false;
      if (this.filters.country && p.country !== this.filters.country) return false;
      if (this.filters.inStock && p.stockStatus !== 'IN_STOCK') return false;
      if (this.filters.minPrice && p.price < Number(this.filters.minPrice)) return false;
      if (this.filters.maxPrice && p.price > Number(this.filters.maxPrice)) return false;
      return true;
    });

    this.currentPage = 1;
  }

  get currentProducts(): Product[] {
    const start = (this.currentPage - 1) * PRODUCTS_PER_PAGE;
    return this.filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / PRODUCTS_PER_PAGE);
  }

  get showingRange(): string {
    const start = (this.currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const end = Math.min(start + PRODUCTS_PER_PAGE - 1, this.filteredProducts.length);
    return `${start}–${end}`;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get title(): string {
    return this.effectiveSlug
      ? this.effectiveSlug.replace('-', ' ').toUpperCase()
      : 'Category';
  }

  // Close drawer from parent
  closeMobileFilter() {
    this.showMobileFilter = false;
  }
}