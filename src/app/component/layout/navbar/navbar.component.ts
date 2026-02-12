import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TNavbarComponent } from '../t-navbar/t-navbar.component';
import { BNavbarComponent } from '../b-navbar/b-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TNavbarComponent, BNavbarComponent, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
