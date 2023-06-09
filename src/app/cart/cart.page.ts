import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
import { Flower, FlowersService } from '../services/flowers.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PointsService } from '../services/points.service';
import confetti from 'canvas-confetti';

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
  isPickupSelected: boolean = false;
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

  setPickupSelected() {
    this.isPickupSelected = true;
  }

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
    if (!this.isPickupSelected) {
      this.alertController
        .create({
          header: 'Select pickup location!',
          message: 'You must select a pickup location before paying!',
          buttons: ['OK'],
        })
        .then((alert) => alert.present());
    } else {
      const alert = await this.alertController.create({
        header: 'Payment Successful',
        message: 'Your payment was successful',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.cartService.clearCart();
              this.didUserWon = this.pointsService.pay(this.totalAmountToPay);

              if (this.didUserWon) {
                console.log('user won');
                setTimeout(() => {
                  confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                  });
                  this.alertController
                    .create({
                      header: 'Congratulations!',
                      message:
                        'You have won 10 points! You can check them on the side menu!',
                      buttons: ['OK'],
                    })
                    .then((alert) => alert.present());
                });
              }

              this.router.navigate(['/home']);
            },
          },
        ],
      });

      await alert.present();
    }
  }

  getCartItems() {
    this.cartService.getCart().then((items) => {
      this.cartItems = items;
    });
  }

  pointAlert() {
    this.alertController
      .create({
        header: 'Points!',
        message:
          'If you make a purchase of 100€ or more you will win points that will enable you to get free items on the future!',
        buttons: ['OK'],
      })
      .then((alert) => alert.present());
  }

  async cartItemsSetup() {
    this.flowersService.getFlowers().subscribe((data) => {
      this.flowers = data;
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

  async ngOnInit() {
    console.log(this.isDataReady);

    this.cartService.getCartSubject().subscribe((total) => {
      this.totalCartItems = total;
      this.cartItemsSetup().then(() => {
        this.isDataReady = true;
        console.log(this.isDataReady);
      });
    });
    console.log(this.isDataReady);

    if (this.totalCartItems > 0) {
      this.getCartItems();
    }
  }
}
