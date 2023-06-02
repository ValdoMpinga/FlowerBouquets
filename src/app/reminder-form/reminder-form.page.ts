import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.page.html',
  styleUrls: ['./reminder-form.page.scss'],
})
export class ReminderFormPage {
  reminderFormGroup = new FormGroup({
    reminderTitle: new FormControl('', Validators.required),
    reminderDateTime: new FormControl('', Validators.required),
    reminderOccasion: new FormControl('', Validators.required),
    reminderAction: new FormControl('', Validators.required),
  });
  isSubmitted: boolean;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {
    this.isSubmitted = false;
  }

  title: string = '';
  dateTime: string = '';
  occasion: string = '';
  action: string = '';

  scheduleNotification() {
    try {
      this.isSubmitted = true;

      if (!this.reminderFormGroup.valid) {
        this.alertController
          .create({
            header: 'Form Incomplete',
            message:
              'Please ensure that you have filled out all the required fields and checked for any errors or missing information.',
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                },
              },
            ],
          })
          .then((alert) => alert.present());

        return false;
      } else {
        console.log(this.reminderFormGroup.value);

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

        return true;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  get formControls() {
    return this.reminderFormGroup.controls;
  }
}
