(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- * Title:about-us.component.html\r\n    // * Author: Professor Krasso\r\n    // * Date: 08 October 2020\r\n    // * Modified: Joann Saeou\r\n    // * Description: about us  component html   page -->\r\n    \r\n  \r\n    \r\n     \r\n\r\n    <div class=\"column-flex\"> \r\n\r\n\r\n        <h2>About-Us </h2>\r\n            <details>\r\n                <summary>Nodebucket </summary>\r\n               \r\n                <p> This is a task management software designed to simplify the way you create, track, edit, and delete tasks</p>\r\n              </details>\r\n  \r\n    </div>\r\n\r\n\r\n    <div class=\"navigation\">\r\n        <router-outlet></router-outlet>\r\n     </div>\r\n    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"main-welcome\">\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <mat-sidenav #sideNav mode=\"push\" position=\"end\">\r\n            <mat-toolbar color=\"primary\">\r\n                <h1>Settings</h1>\r\n                <div style=\"flex: 1 1 auto;\"></div>\r\n                <button mat-icon-button (click)=\"sideNav.toggle()\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n            </mat-toolbar>\r\n            <app-setting-change-color-scheme></app-setting-change-color-scheme>\r\n        </mat-sidenav>\r\n    \r\n        <mat-sidenav-content>\r\n\r\n\r\n            \r\n\t\t<mat-toolbar color=\"primary\">\r\n\t\t\t<h1>Preferred Color Scheme</h1>\r\n\t\t\t<div style=\"flex: 1 1 auto;\"></div>\r\n\t\t\t<button mat-icon-button (click)=\"sideNav.toggle()\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n        </mat-toolbar>\r\n        \r\n        <a class=\"card-wrapper\" href=\"#\">\r\n\r\n\t\t\t<p>Read the Article to this StackBlitz on Medium</p>\r\n\r\n\t\t\t<mat-card>\r\n\t\t\t\t<img mat-card-image src=\"https://miro.medium.com/max/2560/1*CP1MdoQD7ZKi8gANjt-lCg.png\" alt=\"Photo of a Shiba Inu\">\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<h2>How to implement dark / light mode in Angular Material with prefers-color-scheme</h2>\r\n\t\t\t\t\t<p>The dark mode brings many advantages and shouldn't be missed in any modern web application. Let me show you an example for Angular Material</p>\r\n\t\t\t\t</mat-card-content>\r\n\t\t\t</mat-card>\r\n\r\n\t\t</a>\r\n\r\n\t</mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n\r\n<!-- title -->\r\n    <div fxFlex>\r\n        <h1 class=\"title\">\r\n            Welcome to WEB 450's - nodebucket Project <br />\r\n            <span class=\"subtitle\">\r\n              Task Management page\r\n            </span>\r\n          </h1>\r\n    </div>\r\n\r\n    <!-- end of title -->\r\n\r\n    <!--  button for opening the  create task dialog column -->\r\n    <div fxFlex>\r\n        <div class=\"create-task-container\" fxLayout=\"column\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"openCreateTaskDialog()\"> Create Task </button>\r\n        </div>\r\n      </div>\r\n      <!-- end of create task dialog column-->\r\n\r\n\r\n<br/>\r\n<hr>\r\n\r\n\r\n\r\n\r\n<div fxFlex>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"15px\" class=\"task-container\">\r\n\r\n\r\n        <!-- column 1 for TODO-->\r\n<div fxFlex>\r\n     \r\n   \r\n\r\n    <mat-card class=\"mat-elevation-z0\">\r\n\r\n        <mat-card-title> To Do </mat-card-title>\r\n\r\n        <mat-card-content>\r\n  \r\n            <div \r\n            fxLayout=\"column\"\r\n            fxLayoutGap=\"20px\"\r\n            class=\"task-list\"\r\n            cdkDropList\r\n            #todoList=\"cdkDropList\"\r\n            [cdkDropListData]=\"todo\"\r\n            [cdkDropListConnectedTo]=\"[doneList]\"\r\n            (cdkDropListDropped)=\"drop($event)\">\r\n        \r\n\r\n\r\n      <div *ngFor=\"let item of todo\" cdkDrag>\r\n           \r\n        <mat-card class=\"mat-elevation-z0 task-card\">\r\n\r\n            <mat-card-content>\r\n\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex>\r\n                        {{ item.text }}\r\n                    </div>\r\n\r\n\r\n                    <div fxFlex fxLayoutAlign=\"end\">\r\n                        <button [matMenuTriggerFor]=\"todoOptions\" class=\"task-options-menu\" mat-icon-button>\r\n                            <mat-icon>highlight_off\r\n                            </mat-icon>\r\n                        </button>\r\n\r\n\r\n\r\n                        <mat-menu #todoOptions=\"matMenu\" x-position=\"before\">\r\n                            <button (click)=\"deleteTask(item._id)\" mat-menu-item>Remove</button>\r\n                        </mat-menu> \r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </mat-card-content>\r\n\r\n        </mat-card>\r\n      </div> \r\n\r\n      </div>\r\n\r\n   </mat-card-content>\r\n\r\n    </mat-card>\r\n\r\n</div>\r\n  <!-- end of column 1-->\r\n\r\n\r\n\r\n<!-- column 2 for DONE -->\r\n<div fxFlex>\r\n\r\n    <mat-card class=\"mat-elevation-z0\">\r\n\r\n        <mat-card-title>\r\n            Done\r\n        </mat-card-title>\r\n\r\n        <mat-card-content>\r\n            <div \r\n            fxLayout=\"column\"\r\n            fxLayoutGap=\"20px\"\r\n            class=\"task-list\"\r\n            cdkDropList\r\n            #doneList=\"cdkDropList\"\r\n            [cdkDropListData]=\"done\"\r\n            [cdkDropListConnectedTo]=\"[todoList]\"\r\n            (cdkDropListDropped)=\"drop($event)\">\r\n\r\n\r\n\r\n            <div *ngFor=\"let item of done\" cdkDrag>\r\n\r\n                <mat-card class=\"mat-elevation-z0 task-card\">\r\n\r\n\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row\">\r\n\r\n                            <div fxFlex>\r\n                                {{ item.text }}\r\n                            </div>\r\n\r\n                            <div fxFlex fxLayoutAlign=\"end\">\r\n                                <button [matMenuTriggerFor]=\"doneOptions\" class=\"task-options-menu\" mat-icon-button>\r\n                                    <mat-icon>highlight_off</mat-icon>                                  <!-- to change the button icon -->\r\n\r\n                                </button>\r\n\r\n                                <!-- to delete task -->\r\n                                <mat-menu #doneOptions=\"matMenu\" x-position=\"before\">\r\n                                    <button (click)=\"deleteTask(item._id)\" mat-menu-item>Remove</button>\r\n                                </mat-menu>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </mat-card-content>\r\n\r\n                </mat-card>\r\n            </div>\r\n\r\n            </div>\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n     \r\n</div>\r\n  <!-- end of column 2-->\r\n\r\n    </div> \r\n<!-- end of task container -->\r\n\r\n\r\n\r\n</div>\r\n<!-- closing tag of div on line 31-->\r\n\r\n\r\n\r\n<!-- line 1 main-welcome div closing tag-->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- * Title:not-found.component.html \r\n    // * Author: Professor Krasso\r\n    // * Date: 08 October 2020\r\n    // * Modified: Joann Saeou\r\n    // * Description:not found   component html  page --> \r\n    \r\n    \r\n<div class=\"custom404\"> \r\n\r\n    <img class=\"customimage\" src={{custom404image}}>\r\n</div>\r\n\r\n\r\n<nav fxFlex>\r\n    <mat-toolbar>\r\n      <!-- navbar container -->\r\n      <div class=\"navbar-container\">\r\n        <!-- logo -->\r\n\r\n        <button class=\"navbar-link\" routerLink=\"../../pages/home/\" mat-button>Click to go back</button>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </mat-toolbar>\r\n  </nav>\r\n\r\n\r\n  <div fxFlex>\r\n    <main class=\"main-content\" fxFlex=\"100%;\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signin/signin.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signin/signin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- \r\n    * Title: signin.component.html\r\n    * Author: Professor Krasso\r\n    * Date: 25 September 2020\r\n    * Modified: Joann Saeou\r\n    * Description: sign in html  component -->  \r\n\r\n<div fxLayout=\"column\">\r\n\r\n    <div fxFlex *ngIf=\"error\">\r\n        {{ error }}\r\n    </div>\r\n\r\n\r\n    <mat-card>\r\n        <mat-card-title class=\"header\">\r\n            employee Sign-in page \r\n\r\n            <mat-card-subtitle class=\"header\">\r\n                You must enter a valid employeeID to proceed. \r\n\r\n            </mat-card-subtitle>\r\n        </mat-card-title>\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"login(); form.reset();\">\r\n\r\n        <mat-card-content>\r\n            <mat-form-field>\r\n            <input matInput [formControl]=\"form.controls['empId']\" color=\"accent\" placeholder=\"Employee ID\" />\r\n            <mat-error *ngIf=\"form.controls['empId'].hasError('required')\">Employee Id is required</mat-error>\r\n            \r\n            </mat-form-field>\r\n              </mat-card-content>\r\n              <mat-card-actions align=\"end\">\r\n                <button mat-raised-button color='primary' type=\"submit\" fxFlex mat-raised-button [disabled]=\"!form.valid\">\r\n                    <mat-icon>login</mat-icon>Sign-In</button>\r\n            </mat-card-actions>\r\n            \r\n            </form>\r\n                </mat-card>\r\n            </div>\r\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- * Title: auth-layout.component.html\r\n* Author: Professor Krasso\r\n* Date: 19 September 2020\r\n* Modified: Joann Saeou\r\n* Description: auth layout html component --> \r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<!-- * Title: base-layout.component.html\r\n* Author: Professor Krasso\r\n* Date: 19 September 2020\r\n* Modified: Joann Saeou\r\n* Description: base layout html component --> \r\n\r\n<div fxLayout=\"column\">\r\n\r\n\r\n  \r\n\r\n  <!-- navigation -->\r\n  <nav fxFlex>\r\n    <mat-toolbar>\r\n      <!-- navbar container -->\r\n      <div class=\"navbar-container\">\r\n\r\n\r\n\r\n\r\n\r\n        <!-- logo -->\r\n\r\n\r\n\r\n\r\n\r\n        <button class=\"navbar-link\" routerLink=\"/pages/home\" mat-button>\r\n\r\n          Home\r\n\r\n          <mat-icon>face</mat-icon>  \r\n          \r\n         </button>\r\n\r\n        <button class=\"navbar-link\" routerLink=\"/pages/aboutus\" mat-button>\r\n          About-Us\r\n\r\n          <mat-icon>favorite </mat-icon>\r\n\r\n        </button>\r\n\r\n        <button class=\"navbar-link\" routerLink=\"../../pages/not-found/\" mat-button>\r\n          Not-Found\r\n          \r\n          <mat-icon> favorite_border</mat-icon>\r\n        </button>\r\n\r\n\r\n        <button class=\"navbar-link\" align=\"right\" float=\"right\" mat-raised-button color=\"warn\" (click)=\"logOut()\">\r\n          <span class=\"material-icons\">\r\n            login\r\n            </span>logout </button>\r\n\r\n\r\n\r\n\r\n\r\n        <button class=\"logo\" mat-icon-button> \r\n\r\n          <mat-icon> fact_check</mat-icon>\r\n          Nodebucket\r\n          <!-- to change the logo icon -->\r\n                                        \r\n      </button>  \r\n\r\n      </div>\r\n\r\n    </mat-toolbar>\r\n  </nav>\r\n\r\n  <!-- main content -->\r\n  <div fxFlex>\r\n    <main class=\"main-content\" fxFlex=\"100%;\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n\r\n  <!-- footer -->\r\n  <div fxFlex>\r\n    <footer class=\"footer\">\r\n      <mat-toolbar class=\"footer-content\">\r\n        <p>\r\n          &copy; {{year | date: 'yyyy'}} - nodebucket - <a href=\"https://www.bellevue.edu/\" class=\"bu-link\" target=\"_blank\">Bellevue University</a>\r\n        </p>\r\n      </mat-toolbar>\r\n    </footer>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/create-task-dialog/create-task-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/create-task-dialog/create-task-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- * Title: app.routing.ts\r\n    // * Author: Professor Krasso\r\n    // * Date: 19 September 2020\r\n    // * Modified: Joann Saeou\r\n    // * Description: app routing ts  -->\r\n    \r\n\r\n<h3 mat-dialog-title>Add new task here</h3>\r\n\r\n<!-- this will bind the actual FormGroup  -->\r\n<mat-dialog-content [formGroup]=\"taskForm\">\r\n\r\n    <mat-form-field style=\"width: 200px\">\r\n        <input type=\"text\" placeholder=\"Enter a task name here....\" matInput formControlName=\"text\" (keydown.enter)=\"createTask()\"/>\r\n    </mat-form-field>\r\n</mat-dialog-content>\r\n\r\n <!-- mat dialog actions  button to  cancel and createTask -->\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button (click)=\"cancel()\">Cancel</button>\r\n    <button mat-button (click)=\"createTask()\">Create task</button>\r\n\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// <!-- * Title: app.component.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app component ts -->


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'nodebucket';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`,
        styles: [""]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/app-routing.module */ "./src/app/shared/app-routing.module.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared/create-task-dialog/create-task-dialog.component */ "./src/app/shared/create-task-dialog/create-task-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
// tslint:disable-next-line: no-trailing-whitespace

// <!-- * Title: app.module.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app module ts   -->















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        // these are the file component that are created
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__["BaseLayoutComponent"],
            _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_42__["NotFoundComponent"],
            _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_44__["AboutUsComponent"],
            _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CreateTaskDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _shared_app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_43__["DragDropModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__["MatDialogModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_21__["CdkTreeModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_22__["PortalModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_37__["MatBadgeModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_38__["MatGridListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_39__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__["MatDatepickerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        ],
        entryComponents: [
            _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_45__["CreateTaskDialogComponent"]
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* <!-- * Title:about-us.component.css\r\n// * Author: Professor Krasso\r\n// * Date: 08 October 2020\r\n// * Modified: Joann Saeou\r\n// * Description: about us  component css style page --> */\r\n\r\n\r\n/* Flexbox row styles */\r\n\r\n\r\n.row-flex {\r\n    margin: 40px auto;\r\n    max-width: 600px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n\r\n.row-flex div {\r\n    border: 1px dashed gray;\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 100px;\r\n    text-align: center;\r\n    padding: 12px;\r\n}\r\n\r\n\r\n/* Grid row styles */\r\n\r\n\r\n.row-grid {\r\n    margin: 40px auto;\r\n    max-width: 600px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\r\n}\r\n\r\n\r\n.row-grid div {\r\n    border: 1px dashed gray;\r\n    text-align: center;\r\n    padding: 12px;\r\n}\r\n\r\n\r\n.subscriber-form-container {\r\n    max-width: 650px;\r\n    margin: 40px auto;\r\n    border: 1px dashed gray;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.subscriber-form-container form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n\r\n.subscriber-form-container form input {\r\n    margin: 6px;\r\n    padding: 0.4rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.subscriber-form-container form input {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 150px;\r\n}\r\n\r\n\r\n.subscriber-form-container form input[type=\"email\"] {\r\n    -webkit-box-flex: 2;\r\n            flex: 2 1 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzswREFJMEQ7OztBQUcxRCx1QkFBdUI7OztBQUV2QjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQWU7WUFBZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUdBLG9CQUFvQjs7O0FBRXBCO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNERBQTREO0FBQ2hFOzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxtQkFBZTtZQUFmLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQWU7WUFBZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDwhLS0gKiBUaXRsZTphYm91dC11cy5jb21wb25lbnQuY3NzXHJcbi8vICogQXV0aG9yOiBQcm9mZXNzb3IgS3Jhc3NvXHJcbi8vICogRGF0ZTogMDggT2N0b2JlciAyMDIwXHJcbi8vICogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbi8vICogRGVzY3JpcHRpb246IGFib3V0IHVzICBjb21wb25lbnQgY3NzIHN0eWxlIHBhZ2UgLS0+ICovXHJcblxyXG5cclxuLyogRmxleGJveCByb3cgc3R5bGVzICovXHJcblxyXG4ucm93LWZsZXgge1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJvdy1mbGV4IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcclxuICAgIGZsZXg6IDEgMSAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcblxyXG4vKiBHcmlkIHJvdyBzdHlsZXMgKi9cclxuXHJcbi5yb3ctZ3JpZCB7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4ucm93LWdyaWQgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLnN1YnNjcmliZXItZm9ybS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlci1mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmVyLWZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQge1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlci1mb3JtLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcclxuICAgIGZsZXg6IDEgMSAxNTBweDtcclxufVxyXG5cclxuLnN1YnNjcmliZXItZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgZmxleDogMiAxIDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* <!-- * Title:about-us.component.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description: about us  component typescript  page --> */


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /*   \r\n  <!--\r\n  * Title: home.component.css\r\n  * Author: Professor Krasso\r\n  * Date: 18 September 2020\r\n  * Modified: Joann Saeou\r\n  * Description: Home component css file --> */\r\n\r\n  .main-welcome {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .title {\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    color: palevioletred;\r\n    border: 1px solid grey;\r\n    border-style: inherit;\r\n    padding: 1px 2px 2px 1px;\r\n  }\r\n\r\n  .subtitle {\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n  /* \r\n  Angular CDK - Drag N Drop \r\n\r\n  */\r\n\r\n  .cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    box-shadow: 0 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n    0 3px 14px 2px rgba(0,0,0, 0.12);\r\n  }\r\n\r\n  .cdk-drag-placeholder {\r\n  opacity: 0;\r\n  }\r\n\r\n  .cdk-drag-animating {\r\n    -webkit-transition: -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 550ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n  .cdk-drop-list-dragging .task-card:not(.cdk-drag-placeholder) {\r\n    -webkit-transition: -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 550ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n   \r\n\r\n  }\r\n\r\n  /*\r\n  * Task management page styling \r\n  */\r\n\r\n  .create-task-container {\r\n    width: 35%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .task-container {\r\n    width: 85%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .task-list {\r\n    border: 1px solid #ccc;\r\n    min-height: 68px;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    display: block;\r\n  }\r\n\r\n  .task-card {\r\n    cursor: move;\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    min-height: 68px;\r\n    height: 68px;\r\n    font-size: 14px;\r\n    box-sizing: border-box;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .task-options-menu {\r\n    margin-top: -15px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7Ozs7Ozs4Q0FNNEM7O0VBRTVDO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFJQTs7O0dBR0M7O0VBR0Q7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCOztvQ0FFZ0M7RUFDbEM7O0VBRUE7RUFDQSxVQUFVO0VBQ1Y7O0VBRUE7SUFDRSxzRUFBc0Q7SUFBdEQsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxzRUFBc0Q7SUFBdEQsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7OztFQUd4RDs7RUFJQTs7R0FFQzs7RUFHRDtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUdBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qICAgXHJcbiAgPCEtLVxyXG4gICogVGl0bGU6IGhvbWUuY29tcG9uZW50LmNzc1xyXG4gICogQXV0aG9yOiBQcm9mZXNzb3IgS3Jhc3NvXHJcbiAgKiBEYXRlOiAxOCBTZXB0ZW1iZXIgMjAyMFxyXG4gICogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbiAgKiBEZXNjcmlwdGlvbjogSG9tZSBjb21wb25lbnQgY3NzIGZpbGUgLS0+ICovXHJcblxyXG4gIC5tYWluLXdlbGNvbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDFweCAycHggMnB4IDFweDtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qIFxyXG4gIEFuZ3VsYXIgQ0RLIC0gRHJhZyBOIERyb3AgXHJcblxyXG4gICovXHJcblxyXG5cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwgMC4xMik7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1NTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50YXNrLWNhcmQ6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDU1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICBcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qXHJcbiAgKiBUYXNrIG1hbmFnZW1lbnQgcGFnZSBzdHlsaW5nIFxyXG4gICovXHJcblxyXG5cclxuICAuY3JlYXRlLXRhc2stY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLnRhc2stY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50YXNrLWxpc3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDY4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC50YXNrLWNhcmQge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhc2stb3B0aW9ucy1tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var src_app_shared_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/task.service */ "./src/app/shared/task.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/create-task-dialog/create-task-dialog.component */ "./src/app/shared/create-task-dialog/create-task-dialog.component.ts");
// <!-- * Title: home.component.ts
// * Author: Professor Krasso
// * Date: 18 September 2020
// * Modified: Joann Saeou
// * Description: Home component ts file  -->




// import { HttpClient } from '@angular/common/http';



let HomeComponent = class HomeComponent {
    // tslint:disable-next-line:max-line-length
    constructor(taskService, cookieService, dialog) {
        this.taskService = taskService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.empId = this.cookieService.get('session_user'); // this will get the active session user
        this.taskService.findAllTasks(this.empId).subscribe(res => {
            console.log(`--server response from findAllTasks--`);
            console.log(res);
            this.employee = res.data;
            console.log(`--Employee object--`);
            console.log(this.employee);
        }, err => {
            console.log(err); // catch the error here
        }, () => {
            this.todo = this.employee.todo;
            this.done = this.employee.done;
            console.log(`This is the complete function`);
            console.log(this.todo);
            console.log(this.done);
        });
    }
    ngOnInit() {
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.updateTaskList(this.empId, this.todo, this.done);
            console.log(`Reordered the existing list of task items`);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.updateTaskList(this.empId, this.todo, this.done);
            console.log(`Moved task item to the container`);
        }
    }
    updateTaskList(empId, todo, done) {
        this.taskService.updateTask(empId, todo, done).subscribe(res => {
            this.employee = res.data;
        }, err => {
            console.log(err);
        }, () => {
            this.todo = this.employee.todo;
            this.done = this.employee.done;
        });
    }
    // this is the code that will open up the dialog
    openCreateTaskDialog() {
        const dialogRef = this.dialog.open(src_app_shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateTaskDialogComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.taskService.createTask(this.empId, data.text).subscribe(res => {
                    this.employee = res.data;
                }, err => {
                    console.log(err);
                }, () => {
                    this.todo = this.employee.todo;
                    this.done = this.employee.done;
                });
            }
        });
    }
    // to delete certain Task
    deleteTask(taskId) {
        if (taskId) {
            console.log(`Task Item: ${taskId} was delete`); // must use `backtick` to make taskID delete work
            this.taskService.deleteTask(this.empId, taskId).subscribe(res => {
                this.employee = res.data;
            }, err => {
                console.log(err);
            }, () => {
                this.todo = this.employee.todo;
                this.done = this.employee.done;
            });
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_shared_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* <!-- * Title:not-found.component.css \r\n// * Author: Professor Krasso\r\n// * Date: 08 October 2020\r\n// * Modified: Joann Saeou\r\n// * Description:not found   component css style page --> */\r\n\r\n\r\n\r\n.custom404  {\r\n   size: 45px; \r\n   height: 700px;\r\n   width: 700px;\r\n   -webkit-box-pack: space-evenly;\r\n           justify-content: space-evenly;\r\n\r\n}\r\n\r\n\r\n\r\n.customimage { \r\n    height: 700px;\r\n    width: 700px;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzJEQUkyRDs7OztBQUkzRDtHQUNHLFVBQVU7R0FDVixhQUFhO0dBQ2IsWUFBWTtHQUNaLDhCQUE2QjtXQUE3Qiw2QkFBNkI7O0FBRWhDOzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA8IS0tICogVGl0bGU6bm90LWZvdW5kLmNvbXBvbmVudC5jc3MgXHJcbi8vICogQXV0aG9yOiBQcm9mZXNzb3IgS3Jhc3NvXHJcbi8vICogRGF0ZTogMDggT2N0b2JlciAyMDIwXHJcbi8vICogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbi8vICogRGVzY3JpcHRpb246bm90IGZvdW5kICAgY29tcG9uZW50IGNzcyBzdHlsZSBwYWdlIC0tPiAqL1xyXG5cclxuXHJcblxyXG4uY3VzdG9tNDA0ICB7XHJcbiAgIHNpemU6IDQ1cHg7IFxyXG4gICBoZWlnaHQ6IDcwMHB4O1xyXG4gICB3aWR0aDogNzAwcHg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxufVxyXG5cclxuXHJcbi5jdXN0b21pbWFnZSB7IFxyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* <!-- * Title:not-found.component.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description:not found   component ts  page --> */


let NotFoundComponent = class NotFoundComponent {
    constructor() {
        // tslint:disable-next-line: no-inferrable-types
        this.custom404image = '../../../assets/custom404page.png';
    }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/signin/signin.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signin/signin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* <!-- \r\n* Title: signin.component.css\r\n* Author: Professor Krasso\r\n* Date: 25 September 2020\r\n* Modified: Joann Saeou\r\n* Description: sign in css  component -->  */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs0Q0FLNEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA8IS0tIFxyXG4qIFRpdGxlOiBzaWduaW4uY29tcG9uZW50LmNzc1xyXG4qIEF1dGhvcjogUHJvZmVzc29yIEtyYXNzb1xyXG4qIERhdGU6IDI1IFNlcHRlbWJlciAyMDIwXHJcbiogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbiogRGVzY3JpcHRpb246IHNpZ24gaW4gY3NzICBjb21wb25lbnQgLS0+ICAqL1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/*  <!--
* Title: signin.component.ts
* Author: Professor Krasso
* Date: 25 September 2020
* Modified: Joann Saeou
* Description: sign in ts  component -->  */






let SigninComponent = class SigninComponent {
    constructor(router, cookieService, fb, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.form = this.fb.group({
            empId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')])]
        });
    }
    login() {
        const empId = this.form.controls['empId'].value;
        this.http.get('/api/employees/' + empId).subscribe(res => {
            if (res) {
                this.cookieService.set('session_user', empId, 1);
                this.cookieValue = this.cookieService.get('session_user');
                this.router.navigate(['/']);
            }
            else {
                this.error = 'The employee ID is invalid. please try again.';
            }
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/pages/signin/signin.component.css")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/shared/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
// <!-- * Title: app.routing.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app routing ts  -->










const routes = [
    {
        path: '',
        component: _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'pages/home',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            },
            {
                path: 'pages/aboutus',
                component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
            },
        ]
    },
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: 'signin',
                component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/not-found'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*   \r\n<!-- * Title: auth-layout.component.css\r\n* Author: Professor Krasso\r\n* Date: 19 September 2020\r\n* Modified: Joann Saeou\r\n* Description: auth layout css component --> */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzhDQUs4QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogICBcclxuPCEtLSAqIFRpdGxlOiBhdXRoLWxheW91dC5jb21wb25lbnQuY3NzXHJcbiogQXV0aG9yOiBQcm9mZXNzb3IgS3Jhc3NvXHJcbiogRGF0ZTogMTkgU2VwdGVtYmVyIDIwMjBcclxuKiBNb2RpZmllZDogSm9hbm4gU2Flb3VcclxuKiBEZXNjcmlwdGlvbjogYXV0aCBsYXlvdXQgY3NzIGNvbXBvbmVudCAtLT4gKi8iXX0= */"

/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/*
<!-- * Title: auth-layout.component.ts
* Author: Professor Krasso
* Date: 19 September 2020
* Modified: Joann Saeou
* Description: auth layout ts component --> */


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
        styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* <!--
* Title: auth.guard.ts
* Author: Professor Krasso
* Date: 25 September 2020
* Modified: Joann Saeou
* Description: auth guard  ts  component -->  */




let AuthGuard = class AuthGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const sessionUser = this.cookieService.get('session_user');
        if (sessionUser) {
            return true;
        }
        else {
            this.router.navigate(['/session/signin']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*   \r\n<!-- * Title: base-layout.component.css\r\n* Author: Professor Krasso\r\n* Date: 19 September 2020\r\n* Modified: Joann Saeou\r\n* Description: base layout css component --> */\r\n\r\n.logo {\r\n  margin-right: -105px;\r\n  padding: 10px;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n  align-content: flex-end;\r\n text-align: right;\r\n clear: left;\r\n  float:right;\r\n  font-size: 24px;\r\n  font-weight: lighter;\r\n  color: red;\r\n  background-image: transparent;\r\n}\r\n\r\n.navbar-container {\r\n  padding: 55px;\r\n \r\n}\r\n\r\n.navbar-link {\r\n  font-size: 24px;\r\n  font-weight: lighter;\r\n  -webkit-box-align: end;\r\n          align-items: flex-end;\r\n  padding: 30px;\r\n  clear: both;\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  text-align: 10px center;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.main-content {\r\n  padding-left: 30px;\r\n}\r\n\r\n.footer {\r\n  bottom: auto;\r\n  position: absolute;\r\n  /* position: bottom ; */\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.footer-content {\r\n  font-size: 16px;\r\n  font-weight: lighter;\r\n  padding-left: 100px;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n.bu-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.bu-link:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.custom404  {\r\n  size: 45px; \r\n  height: 500px;\r\n  width: 460px;\r\n\r\n}\r\n\r\n.customimage { \r\n   height: 500px;\r\n   width: 460px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzhDQUs4Qzs7QUFFOUM7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsdUJBQXVCO0NBQ3hCLGlCQUFpQjtDQUNqQixXQUFXO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7RUFDWCwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2Qix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFHQTtHQUNHLGFBQWE7R0FDYixZQUFZO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgXHJcbjwhLS0gKiBUaXRsZTogYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzc1xyXG4qIEF1dGhvcjogUHJvZmVzc29yIEtyYXNzb1xyXG4qIERhdGU6IDE5IFNlcHRlbWJlciAyMDIwXHJcbiogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbiogRGVzY3JpcHRpb246IGJhc2UgbGF5b3V0IGNzcyBjb21wb25lbnQgLS0+ICovXHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiBjbGVhcjogbGVmdDtcclxuICBmbG9hdDpyaWdodDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdmJhci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDU1cHg7XHJcbiBcclxufVxyXG5cclxuLm5hdmJhci1saW5rIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdGV4dC1hbGlnbjogMTBweCBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJvdHRvbTogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogcG9zaXRpb246IGJvdHRvbSA7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5idS1saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5idS1saW5rOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmN1c3RvbTQwNCAge1xyXG4gIHNpemU6IDQ1cHg7IFxyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDQ2MHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5jdXN0b21pbWFnZSB7IFxyXG4gICBoZWlnaHQ6IDUwMHB4O1xyXG4gICB3aWR0aDogNDYwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/*
<!-- * Title: base-layout.component.ts
* Author: Professor Krasso
* Date: 19 September 2020
* Modified: Joann Saeou
* Description: base layout ts component --> */




let BaseLayoutComponent = class BaseLayoutComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        // tslint:disable-next-line: no-inferrable-types
        this.nbIcon = '../../../assets/nodebucketicon.png';
        this.year = Date.now();
    }
    ngOnInit() {
    }
    logOut() {
        this.cookieService.deleteAll();
        this.router.navigate(['/session/signin']);
    }
};
BaseLayoutComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-layout',
        template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
        styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
    })
], BaseLayoutComponent);



/***/ }),

/***/ "./src/app/shared/create-task-dialog/create-task-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/create-task-dialog/create-task-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* // <!-- * Title: app.routing.ts\r\n// * Author: Professor Krasso\r\n// * Date: 19 September 2020\r\n// * Modified: Joann Saeou\r\n// * Description: app routing ts  --> */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NyZWF0ZS10YXNrLWRpYWxvZy9jcmVhdGUtdGFzay1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozt1Q0FJdUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3JlYXRlLXRhc2stZGlhbG9nL2NyZWF0ZS10YXNrLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gPCEtLSAqIFRpdGxlOiBhcHAucm91dGluZy50c1xyXG4vLyAqIEF1dGhvcjogUHJvZmVzc29yIEtyYXNzb1xyXG4vLyAqIERhdGU6IDE5IFNlcHRlbWJlciAyMDIwXHJcbi8vICogTW9kaWZpZWQ6IEpvYW5uIFNhZW91XHJcbi8vICogRGVzY3JpcHRpb246IGFwcCByb3V0aW5nIHRzICAtLT4gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/create-task-dialog/create-task-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/create-task-dialog/create-task-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateTaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskDialogComponent", function() { return CreateTaskDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
// <!-- * Title: app.routing.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app routing ts  -->




let CreateTaskDialogComponent = class CreateTaskDialogComponent {
    constructor(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    ngOnInit() {
        this.taskForm = this.fb.group({
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    createTask() {
        this.dialogRef.close(this.taskForm.value);
    }
    // this will cancel & closed the form
    cancel() {
        this.dialogRef.close();
    }
};
CreateTaskDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CreateTaskDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-task-dialog',
        template: __webpack_require__(/*! raw-loader!./create-task-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/create-task-dialog/create-task-dialog.component.html"),
        styles: [__webpack_require__(/*! ./create-task-dialog.component.css */ "./src/app/shared/create-task-dialog/create-task-dialog.component.css")]
    })
], CreateTaskDialogComponent);



/***/ }),

/***/ "./src/app/shared/task.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/task.service.ts ***!
  \****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* <!-- * Title:task.service.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description:this is a service file for tasks ts
//                   this file will invoke all API
 --> */



let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
    }
    /*
     * ==============================================================================
     *  API : findAllTask (here)
     *    this became http://localhost:3000/api/1007/tasks
     * ==============================================================================
    */
    findAllTasks(empId) {
        return this.http.get('/api/employees/' + empId + '/tasks');
    }
    /*
     * ==============================================================================
     *  API : updateTask
     *
     * ==============================================================================
    */
    updateTask(empId, todo, done) {
        return this.http.put('/api/employees/tasks' + empId + '/tasks', {
            todo,
            done
        });
    }
    /*
   * ==============================================================================
   *  API : CreateTask
   *
   * ==============================================================================
  */
    createTask(empId, task) {
        return this.http.post('/api/employees/' + empId + '/tasks', {
            text: task
        });
    }
    /*
   * ==============================================================================
   *  API : deleteTask
   *
   * ==============================================================================
  */
    deleteTask(empId, taskId) {
        return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joann\Desktop\bu-webdev\nodebucket\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map