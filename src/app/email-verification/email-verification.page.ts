import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {
  constructor(public alertController: AlertController) {}
  async sendOtpCode() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'The new OTP Code was successfully sent to your email address.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {}
}
