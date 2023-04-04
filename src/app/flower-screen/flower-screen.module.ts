import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FlowerScreenPage } from './flower-screen.page';

import { FlowerScreenPageRoutingModule } from './flower-screen-routing.module';
import { SideMenuModule } from '../components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowerScreenPageRoutingModule,
    SideMenuModule,
  ],
  declarations: [FlowerScreenPage],
})
export class FlowerScreenPageModule {}
