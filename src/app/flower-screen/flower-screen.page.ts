import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService, CartItem } from '../services/cart.service';
  
@Component({
  selector: 'app-flower-screen',
  templateUrl: './flower-screen.page.html',
  styleUrls: ['./flower-screen.page.scss'],
})
export class FlowerScreenPage implements OnInit {
  data: any;
  quantity: number = 1;
  cart: CartItem[]=[];

  constructor(
    public route: ActivatedRoute,
    public alertController: AlertController,
    private router: Router,
    private cartService: CartService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['data']) {
        this.data = JSON.parse(params['data']);
      }

      this.cartService.getCart().then((cart) => {
        this.cart = cart;
      });
    });
  }

  async addFlowersToCart()
  {
      this.cartService.addItemToCart({
        id: this.data.id,
        quantity: this.quantity,
      });
    
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Item successfully added to the cart!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            this.router.navigate(['/home']);

            console.log(this.data);
            console.log(this.quantity);


          },
        },
      ],
    });

    await alert.present();
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  ngOnInit() {}
}
