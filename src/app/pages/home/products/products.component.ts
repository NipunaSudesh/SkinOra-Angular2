// src/app/pages/products/products.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../../component/theme/header.component';
import { ProductCartComponent } from '../../../component/cart/product-cart/product-cart.component';
import { environment } from '../../../../environments/environment';

interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  slug: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  longDescription?: {
    overview: string;
    keyUses?: string[];
    keyIngredients?: string[];
    howToUse: string;
  };
  stockStatus: 'IN_STOCK' | 'OUT_OF_STOCK' | 'LOW_STOCK';
  wishlist: boolean;
  country: string;
  tags: string[];
  isActive: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProductCartComponent
  ],
  templateUrl: './products.component.html', 
})
export class ProductsComponent implements OnInit {   // ← fixed class name

  products: Product[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  private readonly API_URL = environment.SKINORA_API_URL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<Product[]>(`${this.API_URL}/api/products`).subscribe({
      next: (data) => {
        this.products = data || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  handleAllProductsClick(): void {
    this.router.navigate(['/all-products']);
  }

  trackById(index: number, item: Product): string {
    return item._id;
  }
}