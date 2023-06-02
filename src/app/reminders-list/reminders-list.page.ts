import { Component, OnInit } from '@angular/core';
import {
  LocalNotifications,
  PendingLocalNotificationSchema,
} from '@capacitor/local-notifications';
import { ToastController, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.page.html',
  styleUrls: ['./reminders-list.page.scss'],
})
export class RemindersListPage implements OnInit, ViewDidEnter {
  constructor(
    private toastController: ToastController,
  ) {}
  pendingNotifications: PendingLocalNotificationSchema[] = [];

  async ionViewDidEnter() {
    await this.displayPendingNotifications();
  }


  async getPending(): Promise<PendingLocalNotificationSchema[]> {
    try {
      const { notifications } = await LocalNotifications.getPending();
      return notifications;
    } catch (error) {
      console.error('Error getting pending notifications:', error);
      return [];
    }
  }

  async displayPendingNotifications() {
    const pendingNotifications = await this.getPending();
    if (pendingNotifications.length > 0) {
      this.pendingNotifications = pendingNotifications;

      // const toast = await this.toastController.create({
      //   message: `You have ${pendingNotifications.length} pending notifications`,
      //   duration: 3000, // Duration in milliseconds
      //   position: 'middle', // Choose the position: 'top', 'bottom', 'middle'
      // });
      // toast.present();
    // } else {
    //   const toast = await this.toastController.create({
    //     message: 'No pending notifications',
    //     duration: 3000,
    //     position: 'bottom',
    //   });
    //   toast.present();
    }
  }

  ngOnInit() {}
}
