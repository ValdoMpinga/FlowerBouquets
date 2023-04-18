import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flower-screen',
  templateUrl: './flower-screen.page.html',
  styleUrls: ['./flower-screen.page.scss'],
})
export class FlowerScreenPage implements OnInit {
  data: any;

  quantity: number = 0;

  constructor(
    public route: ActivatedRoute,
    public alertController: AlertController,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['data']) {
        this.data = JSON.parse(params['data']);
        console.log(this.data);
      }
    });
  }

  async addFlowersToCart() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Item successfully added to the cart!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            this.router.navigate(['/home']);
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
