import { HomeComponent } from '../home2/home';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner';
import { Features  } from '../features/features';
import { Categorys   } from '../categorys/categorys';

@Component({
  selector: 'app-index',
  imports: [BannerComponent, HomeComponent, Features, Categorys],
  templateUrl: './index.html',
})
export class Index {

}
