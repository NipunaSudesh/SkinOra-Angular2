import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMAGES } from '../../../../../public/images/index';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  images = IMAGES;
  currentYear = new Date().getFullYear();
}
