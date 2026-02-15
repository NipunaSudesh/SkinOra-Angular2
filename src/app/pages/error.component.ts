import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 class="text-7xl font-extrabold text-primary mb-2">
          404
        </h1>

        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p class="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div class="flex gap-4">
          <button
            (click)="goBack()"
            class="flex-1 flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition hover:border-primary"
          >
            <mat-icon>arrow_back</mat-icon>
            Go Back
          </button>

          <button
            (click)="goHome()"
            class="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:opacity-90 hover:bg-secondary transition"
          >
            <mat-icon>home</mat-icon>
            Go Home
          </button>
        </div>
      </div>
    </div>
  `
})
export class ErrorComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['..']);  // or history.back() if you prefer
  }

  goHome() {
    this.router.navigate(['/']);
  }
}