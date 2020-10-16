/*  <!--
* Title: signin.component.ts
* Author: Professor Krasso
* Date: 25 September 2020
* Modified: Joann Saeou
* Description: sign in ts  component -->  */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient ) { }

  ngOnInit(): void {
    this.form = this.fb.group({

      empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

login() {
  const empId = this.form.controls['empId'].value;

  this.http.get('/api/employees/' + empId).subscribe(res => {
      if (res) {
        this.cookieService.set('sessionEmployee', session.employee, empId, 1, '/') ;
        this.router.navigate(['/']);
      }  else {
        this.error = 'The employee ID is invalid. please try again.';
      }
  });
}

}