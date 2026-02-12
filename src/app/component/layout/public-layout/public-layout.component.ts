import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BNavbarComponent } from '../b-navbar/b-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
   NavbarComponent,
    FooterComponent,
    BNavbarComponent
  ],
  templateUrl: './public-layout.component.html',
})
export class PublicLayoutComponent {}
