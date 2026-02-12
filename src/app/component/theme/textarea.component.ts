import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  template: `
    <textarea
      [placeholder]="placeholder"
      [rows]="rows"
      [ngClass]="[
        sizeClasses[size] || '',
        resize ? 'resize-' + resize : 'resize-none',
        'block w-full border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6',
        className || ''
      ]"
    ></textarea>
  `,
})
export class TextareaComponent {
  @Input() placeholder: string = '';
  @Input() size: 'normal' | 'large' | 'medium' | 'small' = 'normal';
  @Input() rows: number = 4;
  @Input() resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  @Input() className?: string;

  sizeClasses: Record<string, string> = {
    normal: 'py-3 px-5',
    large: 'py-4 px-6',
    medium: 'py-2 px-5',
    small: 'py-1.5 px-3',
  };
}
