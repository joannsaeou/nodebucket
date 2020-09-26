  // tslint:disable-next-line: no-trailing-whitespace
  
// <!-- * Title: app.module.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app module ts   -->

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SigninComponent } from './pages/signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './shared/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
