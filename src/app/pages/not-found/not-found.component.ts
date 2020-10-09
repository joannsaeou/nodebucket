/* <!-- * Title:not-found.component.ts 
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description:not found   component ts  page --> */



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {


  // tslint:disable-next-line: no-inferrable-types
  custom404image: string = '../../../assets/custom404page.png';

  constructor() { }

  ngOnInit() {
  }

}
