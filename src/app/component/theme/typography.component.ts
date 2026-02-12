import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="variant">
      <h1 *ngSwitchCase="'h1'" [ngClass]="classes">{{ text }}</h1>
      <h2 *ngSwitchCase="'h2'" [ngClass]="classes">{{ text }}</h2>
      <h3 *ngSwitchCase="'h3'" [ngClass]="classes">{{ text }}</h3>
      <h4 *ngSwitchCase="'h4'" [ngClass]="classes">{{ text }}</h4>
      <h5 *ngSwitchCase="'h5'" [ngClass]="classes">{{ text }}</h5>
      <h6 *ngSwitchCase="'h6'" [ngClass]="classes">{{ text }}</h6>
      <p *ngSwitchDefault [ngClass]="classes">{{ text }}</p>
    </ng-container>
  `,
})
export class TypographyComponent {
  @Input() variant: string = 'p';
  @Input() text: string = '';
  @Input() className?: string;

  get classes() {
    const base = 'text-base font-normal';
    return `${base} ${this.className || ''}`;
  }
}
