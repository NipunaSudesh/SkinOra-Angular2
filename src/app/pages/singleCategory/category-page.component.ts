// src/app/pages/singleCategory/category-page/category-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { Features } from '../home/features/features';
import { CategoryProductComponent } from './category-product/category-product.component';
@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, BannerComponent,Features,CategoryProductComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-banner [slug]="categorySlug"></app-banner>
      <app-features></app-features>
      <app-category-product [slug]="categorySlug"></app-category-product>
    
    </div>
  `
})
export class CategoryPageComponent implements OnInit {
  categorySlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Handle initial load
    this.updateSlugFromRoute();

    // Handle all future parameter changes (most important part!)
    this.route.paramMap.subscribe(params => {
      this.updateSlugFromRoute(params);
    });
  }

  private updateSlugFromRoute(params = this.route.snapshot.paramMap): void {
    const newSlug = params.get('categorySlug') || '';
    if (newSlug !== this.categorySlug) {
      this.categorySlug = newSlug;
      // You can add any side effects here later (e.g. reload products)
      console.log('Category slug changed to:', this.categorySlug);
    }
  }
}