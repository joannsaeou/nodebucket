/*   
<!-- * Title: base-layout.component.ts
* Author: Professor Krasso
* Date: 19 September 2020
* Modified: Joann Saeou
* Description: base layout ts component --> */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();

  constructor() {

  }

  ngOnInit() {
  }

}
