import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessPageRoutingModule } from './success-routing.module';

import { SuccessPage } from './success.page';
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessPageRoutingModule
  ],
  declarations: [SuccessPage, WelcomeComponent]
})
export class SuccessPageModule {}
