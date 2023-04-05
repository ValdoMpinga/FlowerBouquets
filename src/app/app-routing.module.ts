import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    path: 'home',
    loadChildren: () =>
      import('./user-address/user-address.module').then(
        (m) => m.UserAddressPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'reminder-form',
    loadChildren: () =>
      import('./reminder-form/reminder-form.module').then(
        (m) => m.ReminderFormPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'flower-screen',
    loadChildren: () =>
      import('./flower-screen/flower-screen.module').then(
        (m) => m.FlowerScreenPageModule
      ),
  },
  {
    path: 'email-verification',
    loadChildren: () =>
      import('./email-verification/email-verification.module').then(
        (m) => m.EmailVerificationPageModule
      ),
  },
  {
    path: 'user-address',
    loadChildren: () =>
      import('./user-address/user-address.module').then(
        (m) => m.UserAddressPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
