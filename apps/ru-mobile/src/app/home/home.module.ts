import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { RandomUserModule } from '@nx-ng-ionic/random-user';

@NgModule({
  imports: [
    CommonModule,
    RandomUserModule.forRoot(),
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
