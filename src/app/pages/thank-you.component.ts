import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="min-h-[70vh] flex items-center justify-center px-4">
      <div class="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
<div class=" w-full h-12 flex items-center mb-2 justify-center rounde  ">
  <mat-icon
    class="text-green-400"
    style="font-size: 3.0rem; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"> 
    check_circle
  </mat-icon>
</div>

        <h1 class="text-2xl font-bold mb-2">
          Thank You for Your Order!
        </h1>

        <p class="text-gray-600 mb-6">
          Your order has been placed successfully.<br>
          We’ll contact you soon with delivery details.
        </p>

        <button
          (click)="goHome()"
          class="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Continue Shopping
        </button>
      </div>
    </section>
  `
})
export class ThankYouComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}