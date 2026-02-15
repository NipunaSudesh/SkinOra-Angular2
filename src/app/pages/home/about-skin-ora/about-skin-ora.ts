import { Component } from '@angular/core';
import { IMAGES } from '../../../../../public/images/index';
import {TypographyComponent} from '../../../component/theme/typography.component'

@Component({
  selector: 'app-about-skin-ora',
  standalone: true,
    imports: [TypographyComponent],
  templateUrl: './about-skin-ora.html',
})
export class AboutSkinOra {
  banner6 = IMAGES.banner6; 
}