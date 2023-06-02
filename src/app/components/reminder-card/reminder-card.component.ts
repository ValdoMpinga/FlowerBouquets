import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.scss'],
})
export class ReminderCardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() date: string | null = '';
  @Input() title: string = '';
  @Input() intent: string = '';

  constructor(private alertController: AlertController) {}

  async deletePendingNotification() {
    const alert = await this.alertController.create({
      header: 'Delete Reminder',
      message: `Are you sure you want to delete this reminder? ${this.title}`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          handler: async () => {
            await this.deleteNotification(this.id);
                this.alertController
                  .create({
                    header: 'Success!',
                    message: 'Reminder deleted!',
                    buttons: ['OK'],
                  })
                  .then((alert) => alert.present());
            
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteNotification(notificationId: number) {
    try {
      await LocalNotifications.cancel({
        notifications: [{ id: notificationId }],
      });
      console.log('Notification deleted successfully');
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  }

  ngOnInit() {}
}
