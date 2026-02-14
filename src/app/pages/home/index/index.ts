
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner';
import { Features  } from '../features/features';
import { Categorys   } from '../categorys/categorys';
import { CustomerTestimonials   } from '../customer-testimonials/customer-testimonials';
import { AboutSkinOra   } from '../about-skin-ora/about-skin-ora';

@Component({
  selector: 'app-index',
  imports: [BannerComponent, Features, Categorys,AboutSkinOra,CustomerTestimonials],
  templateUrl: './index.html',
})
export class Index {

}
