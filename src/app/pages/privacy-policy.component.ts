import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-100 px-4 py-10">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 class="text-3xl font-bold text-primary mb-6 text-center">
          Privacy Policy
        </h1>

        <p class="text-gray-600 mb-4 text-center">
          At <span class="font-mediam">Skinora</span>, we value your privacy and are committed to protecting your personal information.
        </p>

        <section class="mb-5">
          <h2 class="text-xl font-mediam mb-2">Information We Collect</h2>
          <p class="text-gray-600">
            We collect information such as your name, email address, and other details when you register, place orders, or contact us.
          </p>
        </section>

        <section class="mb-5">
          <h2 class="text-xl font-mediam mb-2">How We Use Your Information</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>To provide and improve our services</li>
            <li>To process orders and payments</li>
            <li>To communicate updates and offers</li>
          </ul>
        </section>

        <section class="mb-5">
          <h2 class="text-xl font-mediam mb-2">Data Security</h2>
          <p class="text-gray-600">
            We implement security measures to protect your personal data from unauthorized access.
          </p>
        </section>

        <section class="mb-5">
          <h2 class="text-xl font-mediam mb-2">Third-Party Services</h2>
          <p class="text-gray-600">
            We do not sell or trade your personal information to third parties.
          </p>
        </section>

        <p class="text-sm text-gray-500 mt-6 text-center">
          Last updated: {{ currentYear }}
        </p>
      </div>
    </div>
  `
})
export class PrivacyPolicyComponent {
  currentYear = new Date().getFullYear();
}