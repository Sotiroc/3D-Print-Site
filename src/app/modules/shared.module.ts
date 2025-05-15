import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { FunkyCardComponent } from '../components/funky-card/funky-card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginComponent } from '../auth/login/login.component';
import {environment} from '../../environments/environment';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PrimeCardComponent } from '../components/pimeng/prime-card.component';
import { FeatureCardComponent } from '../components/feature-card/feature-card.component';

@NgModule({
  imports: [
    CommonModule, 
    ButtonComponent, 
    FunkyCardComponent,
    FooterComponent,
    LoginComponent,
    CardModule,
    ButtonModule,
    PrimeCardComponent,
    FeatureCardComponent
  ],
  
    exports: [
        ButtonComponent, 
        FunkyCardComponent,
        FooterComponent,
        LoginComponent,
        ButtonModule,
        CardModule,
        PrimeCardComponent,
        FeatureCardComponent
      ]
})
export class SharedModule {}