import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FlowersCardComponent } from '../components/flowers-card/flowers-card.component';
import { SideMenuModule } from '../components/side-menu/side-menu.module';
import { CartBadgeModule } from '../components/cart-badge/cart-badge.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SideMenuModule,
    CartBadgeModule,
  ],
  declarations: [HomePage, FlowersCardComponent],
})
export class HomePageModule {}
