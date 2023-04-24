import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  async addUserAddress() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Address was successfully added, now you can login to the app!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {}
}
