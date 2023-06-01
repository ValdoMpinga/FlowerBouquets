import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.page.html',
  styleUrls: ['./reminder-form.page.scss'],
})
export class ReminderFormPage {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  title: string = '';
  dateTime: string = '';
  description: string = '';
  occasion: string = '';
  frequency: string = '';
  action: string = '';

  scheduleNotification() {
    try {
      // Parse the date and time string into a Date object
      const triggerDate = new Date(this.dateTime);
      const id = Math.floor(Math.random() * 1000000);
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formattedDate = formatter.format(triggerDate);

      // Schedule the notification
      LocalNotifications.schedule({
        notifications: [
          {
            id: id,
            title: this.title,
            body: `${this.action} for ${this.occasion}`,
            schedule: { at: triggerDate },
            sound: 'alarm.wav',
            smallIcon: 'flowerbouquetslogo',
            largeIcon: 'flowerbouquetslogo',
            iconColor: '#A57C97',
          },
        ],
      });

      this.alertController
        .create({
          header: 'Reminder created!',
          message: `Your reminder is set for: ${formattedDate}`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigate(['/home']);
              },
            },
          ],
        })
        .then((alert) => alert.present());
    } catch (e) {
      console.log(e);
    }
  }
}
