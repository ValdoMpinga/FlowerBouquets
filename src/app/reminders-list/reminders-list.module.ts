import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemindersListPageRoutingModule } from './reminders-list-routing.module';

import { RemindersListPage } from './reminders-list.page';
import { ReminderCardComponent } from '../components/reminder-card/reminder-card.component';
import { SideMenuModule } from '../components/side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemindersListPageRoutingModule,
    SideMenuModule,
  ],
  declarations: [RemindersListPage, ReminderCardComponent],
})
export class RemindersListPageModule {}
