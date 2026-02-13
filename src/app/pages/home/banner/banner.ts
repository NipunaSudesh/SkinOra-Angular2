import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { MatIconModule } from '@angular/material/icon';
import { IMAGES } from '../../../../../public/images/index';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './banner.html',
})
export class BannerComponent implements AfterViewInit {  
  @ViewChild('swiperEl') swiperEl!: ElementRef<HTMLDivElement>;

  swiper?: Swiper;

  banners = [
    { id: 1, img: IMAGES.banner1, alt: 'Skinora Banner 1' },
    { id: 2, img: IMAGES.banner2, alt: 'Skinora Banner 2' },
    { id: 3, img: IMAGES.banner5, alt: 'Skinora Banner 5' },
    { id: 4, img: IMAGES.banner3, alt: 'Skinora Banner 3' },
    { id: 5, img: IMAGES.banner4, alt: 'Skinora Banner 4' },
  ];

  ngAfterViewInit() {
    if (!this.swiperEl?.nativeElement) {
      console.warn('Swiper container not found');
      return;
    }

    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay, Pagination],
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    console.log('Swiper initialized'); // ← debug tip
  }

  next() {
    this.swiper?.slideNext();
  }

  prev() {
    this.swiper?.slidePrev();
  }
}