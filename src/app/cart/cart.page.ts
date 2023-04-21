import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
import { Flower, FlowersService } from '../services/flowers.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PointsService } from '../services/points.service';

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  flowers: Flower[] = [];
  isDataReady: boolean = false;
  filteredCartItems: CartItemType[] = [];
  filteredCartItem: CartItemType = {
    id: 0,
    image: '',
    name: '',
    price: 0,
    quantity: 0,
  };
  totalCartItems: number = 0;
  totalAmountToPay: number = 0;

  cartItems: CartItem[] = [];
  displayCartItems: CartItem[] = [];

  didUserWon: boolean = false;
  
  constructor(
    private cartService: CartService,
    private flowersService: FlowersService,
    private pointsService: PointsService,
    private alertController: AlertController,
    private router: Router
  ) {}

  
  async clearCartItems() {
    const alert = await this.alertController.create({
      header: 'Clear cart items!',
      message: 'Do you want to clean the cart?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cart clear aborted');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            this.cartService.clearCart();
            this.router.navigate(['/home']);
            console.log('Cart cleared successfully');
          },
        },
      ],
    });

    await alert.present();
  }

  async pay() {
    const alert = await this.alertController.create({
      header: 'Payment Successful',
      message: 'Your payment was successful',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.cartService.clearCart();
            this.didUserWon = this.pointsService.pay(this.totalAmountToPay)

            if (this.didUserWon)
            {
              console.log('user won');
              
            }
              
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

  getCartItems() {
    this.cartService.getCart().then((items) => {
      this.cartItems = items;
    });
  }

  cartItemsSetup()
  {
       this.flowersService.getFlowers().subscribe((data) => {
      this.flowers = data;
      this.isDataReady = true;
      this.cartItems.forEach((item) => {
        this.filteredCartItems.push(
          this.flowers
            .filter((flower) => flower.id === item.id)
            .map(
              (flower): CartItemType => ({
                quantity: item.quantity,
                ...flower,
              })
            )[0]
        );
      });

      this.filteredCartItems.forEach(
        (item) => (this.totalAmountToPay += item.price * item.quantity)
      );
    });
  }

  ngOnInit() {
    this.cartService.getCartSubject().subscribe((total) => {
      this.totalCartItems = total;
      this.cartItemsSetup()
    });

    if (this.totalCartItems > 0) {
      this.getCartItems();
    }
  }

}
