import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
      <div class="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h1 class="text-3xl font-bold text-primary mb-6 text-center">
          Terms & Conditions
        </h1>

        <p class="text-gray-600 mb-6 text-sm text-center">
          Last updated: January 2026
        </p>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">1. Acceptance of Terms</h2>
          <p class="text-gray-700">
            By accessing or using Skinora, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">2. User Accounts</h2>
          <p class="text-gray-700">
            You are responsible for maintaining the confidentiality of your account and password. Any activity under your account is your responsibility.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">3. Products & Services</h2>
          <p class="text-gray-700">
            We strive to display accurate product information. However, we do not guarantee that descriptions, prices, or availability are always error-free.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">4. Prohibited Activities</h2>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Using the site for unlawful purposes</li>
            <li>Attempting to access other users’ accounts</li>
            <li>Uploading malicious or harmful content</li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">5. Termination</h2>
          <p class="text-gray-700">
            We reserve the right to suspend or terminate your account if you violate these terms without prior notice.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-mediam mb-2">6. Limitation of Liability</h2>
          <p class="text-gray-700">
            Skinora shall not be liable for any indirect or incidental damages resulting from the use of our services.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-mediam mb-2">7. Contact Us</h2>
          <p class="text-gray-700">
            If you have any questions about these Terms, please contact us at
            <span class="font-medium text-primary">support@skinora.com</span>.
          </p>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent {}