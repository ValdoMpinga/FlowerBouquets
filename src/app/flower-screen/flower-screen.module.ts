import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowerScreenPageRoutingModule } from './flower-screen-routing.module';

import { FlowerScreenPage } from './flower-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowerScreenPageRoutingModule
  ],
  declarations: [FlowerScreenPage]
})
export class FlowerScreenPageModule {}
