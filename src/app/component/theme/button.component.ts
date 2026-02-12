import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="[base, styles[variant]]">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';

  base = 'px-5 py-2 rounded-lg font-semibold transition duration-200';

  styles: Record<string, string> = {
    primary: 'bg-[#000080] text-white hover:bg-blue-700',
    secondary: 'bg-[#FFD700] text-black hover:bg-yellow-500',
    outline: 'border border-[#000080] text-[#000080]  hover:bg-[#000080] hover:text-white',
  };
}
