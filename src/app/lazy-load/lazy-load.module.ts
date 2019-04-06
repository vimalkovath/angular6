import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: '../pages/register/register.module#RegisterModule' },

  { path: '**', redirectTo: 'auth/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LazyLoadModule { }
