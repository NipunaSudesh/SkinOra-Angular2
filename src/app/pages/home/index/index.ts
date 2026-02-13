import { HomeComponent } from '../home2/home';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner';

@Component({
  selector: 'app-index',
  imports: [BannerComponent, HomeComponent],
  templateUrl: './index.html',
})
export class Index {

}
