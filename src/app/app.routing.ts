  
// <!-- * Title: app.routing.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app routing ts  -->

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
      /*
        New components go here...
       */
    ]
  }
];
