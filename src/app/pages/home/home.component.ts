import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../component/theme/button.component';
import { HeaderComponent } from '../../component/theme/header.component';
import { TextInputComponent } from '../../component/theme/textinput.component';
import { TextareaComponent } from '../../component/theme/textarea.component';
import { TypographyComponent } from '../../component/theme/typography.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    TextInputComponent,
    TextareaComponent,
    TypographyComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
