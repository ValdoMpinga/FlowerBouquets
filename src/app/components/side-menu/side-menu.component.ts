import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  points: number = 0;

  constructor(
    private pointsService: PointsService,
    private alertController: AlertController,
    private router: Router,
    public platform: Platform
  ) {
    this.points = this.pointsService.getPoints();
    this.platform = platform;
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Are you sure you want to logout?',
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
            this.router.navigate(['/login']);
            console.log('User logged out');
          },
        },
      ],
    });

    await alert.present();
  }

  async closeApp() {
    var navigator: any;
    const alert = await this.alertController.create({
      header: 'Close the app!',
      message: 'Are you sure you want to close the app?',
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
            App.exitApp()
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {}
}
