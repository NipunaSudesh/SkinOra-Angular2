import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import axios from 'axios';
import { HeaderComponent } from '../../component/theme/header.component';
import { ProductCartComponent } from '../../component/cart/product-cart/product-cart.component';
import { environment } from '../../../environments/environment';
import { ButtonComponent } from '../../component/theme/button.component';


interface LongDescription {
  overview?: string;
  keyUses?: string[];
  keyIngredients?: string[];
  howToUse?: string;
}

interface Product {
  _id: string;
  slug: string;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  stockStatus: string;
  categorySlug: string;
  shortDescription: string;
  longDescription?: LongDescription;
}

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HeaderComponent,
    ProductCartComponent,
    ButtonComponent
  ],
  templateUrl: './single-product.component.html',

})
export class SingleProductComponent implements OnInit {
  product: Product | null = null;
  relatedProducts: Product[] = [];
  qty: number = 1;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadProduct(slug);
    }
  }

  async loadProduct(slug: string): Promise<void> {
    this.isLoading = true;

    try {
      // Fetch single product
      const productRes = await axios.get<Product>(
        `${environment.SKINORA_API_URL}/api/products/slug/${slug}`
      );
      this.product = productRes.data;
console.log("single product i s:" ,this.product)
      // Fetch related products
      if (this.product?.categorySlug) {
        const categoryRes = await axios.get<Product[]>(
          `${environment.SKINORA_API_URL}/api/categories/${this.product.categorySlug}`
        );

        this.relatedProducts = categoryRes.data
          .filter(p => p.slug !== slug)
          .slice(0, 10);
      }
    } catch (error) {
      console.error('Error loading product:', error);
      this.product = null;
    } finally {
      this.isLoading = false;
    }
  }

  // Quantity controls
  increaseQty(): void {
    this.qty++;
  }

  decreaseQty(): void {
    if (this.qty > 1) {
      this.qty--;
    }
  }

  // Add to Cart
  async addToCart(): Promise<void> {
    if (!this.product) return;

    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    try {
      await axios.post(
        `${environment.SKINORA_API_URL}/api/cart/add`,
        { productId: this.product._id, qty: this.qty },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      this.router.navigate(['/cart']);
    } catch (error) {
      console.error('Add to cart failed:', error);
      alert('Failed to add to cart. Please try again.');
    }
  }

  // Buy Now
  buyNow(): void {
    if (!this.product) return;

    const checkoutItem = {
      id: this.product._id,
      slug: this.product.slug,
      name: this.product.name,
      imageUrl: this.product.imageUrl,
      price: this.product.price,
      qty: this.qty
    };

    const subtotal = this.product.price * this.qty;
    const shipping = 350;
    const total = subtotal + shipping;

    this.router.navigate(['/checkout'], {
      state: {
        items: [checkoutItem],
        subtotal,
        shipping,
        total
      }
    });
  }

  // Optional: helper for star rating display
  get stars(): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.round(this.product?.rating || 0) ? 1 : 0);
  }
}