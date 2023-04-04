import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartPage } from './cart.page';

import { CartPageRoutingModule } from './cart-routing.module';
import { CartItemComponent } from '../components/cart-item/cart-item.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CartPageRoutingModule],
  declarations: [CartPage, CartItemComponent],
})
export class CartPageModule {}
