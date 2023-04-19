import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartBadgeComponent } from './cart-badge.component';

@NgModule({
  declarations: [CartBadgeComponent],
  exports: [CartBadgeComponent],
  imports: [CommonModule, IonicModule],
})
export class CartBadgeModule {}
