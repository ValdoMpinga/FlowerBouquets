import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  quantity: number = 0;
  quantityValues: number[] = [];
  private cartSubject = new BehaviorSubject<number>(0);

  @Input() flowersId: number = 0;
  @Input() flowersImage: string = '';
  @Input() flowersName: string = '';
  @Input() flowersPrice: number = 0;
  @Input() flowersQuantity: number = 0;

  constructor(
    private cartService: CartService,
    private alertController: AlertController
  ) {
    for (let i = 1; i <= 100; i++) {
      this.quantityValues.push(i);
    }
  }

  onSelectChange()
  {
    console.log('here');    
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
  ngOnInit() {
    this.cartService.getCartSubject().subscribe(() => {});
  }
}
