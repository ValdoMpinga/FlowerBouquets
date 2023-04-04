import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowerScreenPage } from './flower-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FlowerScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowerScreenPageRoutingModule {}
