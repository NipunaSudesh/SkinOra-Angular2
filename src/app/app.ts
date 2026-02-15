import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMAGES } from '../../public/images/index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
    standalone: true,  
  // templateUrl: './app.html',
  styleUrl: './app.css',
  template: `<router-outlet></router-outlet>`,
})
export class App {
  protected readonly title = signal('SkinOra-angular');
   images = IMAGES;
}
