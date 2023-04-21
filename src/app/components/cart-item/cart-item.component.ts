import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  quantity: number = 0;
  quantityValues: number[] = [];

  @Input() flowersId: number = 0;
  @Input() flowersImage: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VJOEUC4vt5cxi8uJEbJkhwHaEo%26pid%3DApi&f=1&ipt=edcf40b8c87a9eab78af853721e55ea02968e2c22f13dc38179cdb198a850eaa&ipo=images';
  @Input() flowersName: string = 'Tulipas';
  @Input() flowersPrice: number = 19;
  @Input() flowersQuantity: number = 3;

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
  ) {
    for (let i = 1; i <= 100; i++) {
      this.quantityValues.push(i);
    }
  }

  async deleteCartItem() {
    const alert = await this.alertController.create({
      header: 'Remove flowers',
      message: 'Are you sure you want to delete those flowers?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Item deleted successfully');

            this.cartService.removeItemFromCart({
              id: this.flowersId,
              quantity: this.flowersQuantity,
            });
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {}
}
