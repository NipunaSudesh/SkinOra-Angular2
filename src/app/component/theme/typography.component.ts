import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (variant) {
      @case ('h1') { <h1    [ngClass]="classes"><ng-content></ng-content></h1> }
      @case ('h2') { <h2    [ngClass]="classes"><ng-content></ng-content></h2> }
      @case ('h3') { <h3    [ngClass]="classes"><ng-content></ng-content></h3> }
      @case ('h4') { <h4    [ngClass]="classes"><ng-content></ng-content></h4> }
      @case ('h5') { <h5    [ngClass]="classes"><ng-content></ng-content></h5> }
      @case ('h6') { <h6    [ngClass]="classes"><ng-content></ng-content></h6> }
      @default           { <p     [ngClass]="classes"><ng-content></ng-content></p>  }
    }
  `,
})
export class TypographyComponent {
  @Input() variant: string = 'body1';
  @Input() className = '';

  protected get classes(): string {
    const styles: Record<string, string> = {
      h1: 'text-5xl md:text-6xl font-extrabold tracking-tight',
      h2: 'text-4xl md:text-5xl font-bold tracking-tight',
      h3: 'text-3xl md:text-4xl font-bold',
      h4: 'text-2xl md:text-3xl font-semibold',
      h5: 'text-xl md:text-2xl font-semibold',
      h6: 'text-lg md:text-xl font-medium',
      body1: 'text-base md:text-lg leading-relaxed',
    };

    const base = styles[this.variant] ;
    return this.className ? `${base} ${this.className}` : base;
  }
}