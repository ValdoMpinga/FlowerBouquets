import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderFormPageRoutingModule } from './reminder-form-routing.module';

import { ReminderFormPage } from './reminder-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderFormPageRoutingModule
  ],
  declarations: [ReminderFormPage]
})
export class ReminderFormPageModule {}
