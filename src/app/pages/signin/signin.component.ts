/* <!--
* Title: signin.component.ts
* Author: Professor Krasso
* Date: 25 September 2020
* Modified: Joann Saeou
* Description: sign in ts  component -->  */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

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
    const empId = this.form.controls.empId.value;

    // make sure the HTTP.get URL is matched correctly

    this.http.get('/api/employees/' + empId).subscribe(res => {
      if (res) {
        this.cookieService.set('session_user', empId, 1);
        this.router.navigate(['/']);
      } else {
        this.error = 'The employee Id is invalid, please try again';
      }
    });
  }

  logout() {
    const empId = this.form.controls.empId.value;


    // make sure the HTTP.get URL is matched correctly
    this.http.get('/api/employees/' + empId).subscribe(res => {
      if (res) {
        this.cookieService.set('session_user', empId, 1);
        this.router.navigate(['/']);
      } else {
        this.error = 'logging out is invalid';
      }
    });
  }

}
