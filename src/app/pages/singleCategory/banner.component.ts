import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { IMAGES } from '../../../../public/images';

interface Category {
  slug: string;
  categoriesName: string;
  longDescription: string;
  bannerImage?: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div
        class="relative py-20 bg-cover bg-center bg-no-repeat h-96"
        [ngStyle]="{ 'background-image': 'url(' + bannerUrl + ')' }"
      >
        <!-- overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- content -->
        <div class="relative container-card text-start">
          <h2 class="text-lg text-white tracking-wide">
            Category
          </h2>

          <h1 class="text-4xl md:text-5xl font-bold text-white mt-2">
            {{ category?.categoriesName || 'Loading...' }}
          </h1>

          <p class="text-white text-[15px] mt-1 max-w-xl">
            {{
              category?.longDescription ||
              'Discover premium skincare products selected just for you.'
            }}
          </p>
        </div>
      </div>
    </section>
  `,
})
export class BannerComponent implements OnInit, OnChanges {
  @Input() slug: string = '';  

  category: Category | null = null;

  private readonly API_URL = environment.SKINORA_API_URL;

  get bannerUrl(): string {
    return this.category?.bannerImage ?? IMAGES?.banner ?? '/assets/images/category-default.jpg';
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // This is the critical part — reacts to EVERY slug change
    if (changes['slug']) {
      // Optional: clear old data for instant feedback
      this.category = null;
      this.loadCategory();
    }
  }

  private loadCategory(): void {
    const currentSlug = this.slug?.trim();
    if (!currentSlug) return;

    axios.get<Category[]>(`${this.API_URL}/api/categories`)
      .then(res => {
        if (Array.isArray(res.data)) {
          this.category = res.data.find(c => c.slug === currentSlug) || null;
        }
      })
      .catch(err => {
        console.error('Banner load failed:', err);
        
      });
  }
}