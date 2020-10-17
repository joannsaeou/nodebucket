
// <!-- * Title: app.routing.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app routing ts  -->

import { HomeComponent } from '../pages/home/home.component';
import { BaseLayoutComponent } from '../shared/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './auth.guard';
import { AuthLayoutComponent } from '../shared/auth-layout/auth-layout.component';
import { SigninComponent } from '../pages/signin/signin.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'pages/home',
        component: HomeComponent
      },
      {
        path: 'pages/aboutus',
        component: AboutUsComponent,
      },

    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent

      }
    ]
  },
  {
    path: '**',        // will take user to the not-found page
    redirectTo: 'session/not-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
