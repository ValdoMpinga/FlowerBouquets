import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss'],
})
export class CartBadgeComponent implements OnInit {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    await this.cartService.getCart();
    const quantity = await this.cartService.getTotalItemsInCart();
    this.cartQuantity = quantity;
  }
}
