import { Component, OnInit } from '@angular/core';
import { FlowersService, Flower } from '../services/flowers.service';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cartQuantity: number = 0;
  isDataReady: boolean = false;
  cart: CartItem[] = [];
  flowers: Flower[] = [];

  constructor(
    private flowersService: FlowersService,
    private cartService: CartService
  ) {
    this.cartService.getCart().then((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {
    this.flowersService.getFlowers().subscribe((data) => {
      this.flowers = data;
      this.isDataReady = true;
    });
  }
}
