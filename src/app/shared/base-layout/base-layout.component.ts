/*
<!-- * Title: base-layout.component.ts
* Author: Professor Krasso
* Date: 19 September 2020
* Modified: Joann Saeou
* Description: base layout ts component --> */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {


  // tslint:disable-next-line: no-inferrable-types
  nbIcon: string = '../../../assets/nodebucketicon.png';


  year: number = Date.now();

  constructor(private cookieService: CookieService, private router: Router) {


  }

  ngOnInit(): void {

    this.cookieService.deleteAll();
  }


  logOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}
