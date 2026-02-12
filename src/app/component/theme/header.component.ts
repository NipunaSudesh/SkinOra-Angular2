import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-10 mb-5 w-full flex flex-col justify-center items-center">
      <h2 class="text-4xl font-semibold uppercase text-primary">{{ title }}</h2>
      <p class="text-gray-700" *ngIf="description">{{ description }}</p>
    </div>
  `,
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() description?: string;
}
