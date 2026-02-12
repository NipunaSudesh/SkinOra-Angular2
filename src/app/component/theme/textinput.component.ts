import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [ngClass]="[
        sizeClasses[size] || '',
        'block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6',
        className || ''
      ]"
    />
  `,
})
export class TextInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() size: 'normal' | 'large' | 'medium' | 'small' | 'ex_small' = 'normal';
  @Input() className?: string;

  sizeClasses: Record<string, string> = {
    normal: 'py-3 px-5',
    large: 'py-4 px-6',
    medium: 'py-2 px-5',
    small: 'py-1.5 px-3',
    ex_small: 'py-1.5 px-3 text-sm',
  };
}
