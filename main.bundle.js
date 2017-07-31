webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/main-page/main-page.module": [
		"../../../../../src/app/pages/main-page/main-page.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__ = __webpack_require__("../../../../../src/app/theme/theme.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_5_app_app_routing__["a" /* routedComponents */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_app_app_routing__["b" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdIconModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome__ = __webpack_require__("../../../../../src/app/pages/welcome/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__pages_welcome__["a" /* WelcomeComponent */] },
    { path: 'main-page', loadChildren: './pages/main-page/main-page.module#MainPageModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__pages_welcome__["a" /* WelcomeComponent */],
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/welcome/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome_component__ = __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__welcome_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"balloon\" src=\"assets/img/balloon.png\" alt=\"ballon\">\r\n<div class=\"bg\">\r\n    <img class=\"cloud position-4\" src=\"assets/img/cloud.png\" alt=\"\">\r\n</div>\r\n<div class=\"back-layer-1\">\r\n    <img class=\"cloud position-1\" src=\"assets/img/cloud.png\" alt=\"\">\r\n    <img class=\"cloud position-3\" src=\"assets/img/cloud.png\" alt=\"\">\r\n</div>\r\n<div class=\"back-layer-2\">\r\n    <img class=\"cloud position-2\" src=\"assets/img/cloud.png\" alt=\"\">\r\n</div>\r\n<header class=\"welcome-header\">\r\n    <span>welcome to</span>\r\n    <img src=\"assets/logo.png\" alt=\"\" class=\"logo\">\r\n</header>\r\n\r\n<div @flyInOut *ngIf=\"!openLoginForm\">\r\n    <a class=\"mobile-btn-primary\" (click)=\"openLoginForm=true\"> Login </a>\r\n    <a class=\"mobile-btn-primary\" (click)=\"openLoginForm=true; register=true\"> Register </a>\r\n    <a class=\"mobile-btn\" href=\"/main-page\"> Enter without signin </a>\r\n</div>\r\n\r\n<div @flyInOut *ngIf=\"openLoginForm\">\r\n    <div class=\"mobile-login-fields\" [class.sign-up]=\"register\">\r\n        <input type=\"text\" placeholder=\"username\">\r\n        <input type=\"password\" placeholder=\"password\" class=\"last\">7\r\n    </div>\r\n    <a class=\"mobile-btn-primary\" href=\"/main-page\"> {{register ? 'Sign-up' : 'Sign-in'}}</a>\r\n    <a class=\"mobile-btn\" (click)=\"openLoginForm=false; register=false\" > back </a>\r\n</div>\r\n<a class=\"mobile-bottom-btn\" href=\"/main-page\"> What is reddit? </a>\r\n\r\n<div class=\"container\">\r\n    <div class=\"login\">\r\n        <h1>Sign in</h1>\r\n        <div class=\"login-fields\">\r\n            <input type=\"text\" placeholder=\"username\">\r\n            <input type=\"password\" placeholder=\"password\" class=\"last\">\r\n        </div>\r\n        <a class=\"btn-primary\" href=\"/main-page\"> Login </a>\r\n    </div>\r\n    <div class=\"vertical-separator\"> </div>\r\n    <div class=\"login\">\r\n        <h1>don't have an account? </h1>\r\n        <br>\r\n        <a href=\"/main-page\" class=\"btn-primary\"> Register </a>\r\n        <a href=\"/main-page\" class=\"btn\"> Enter without signin </a>\r\n        <a href=\"/main-page\" class=\"btn\"> \"I have no idea what I'm doin' here\" </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Slab);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Varela+Round);", ""]);

// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip:not(.mat-basic-chip) {\n  font-size: 13px;\n  line-height: 16px; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-input-container {\n  font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-input-wrapper {\n  padding-bottom: 1.296875em; }\n\n.mat-input-prefix .mat-icon,\n.mat-input-prefix .mat-datepicker-toggle,\n.mat-input-suffix .mat-icon,\n.mat-input-suffix .mat-datepicker-toggle {\n  font-size: 150%; }\n\n.mat-input-prefix .mat-icon-button,\n.mat-input-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-input-prefix .mat-icon-button .mat-icon,\n  .mat-input-suffix .mat-icon-button .mat-icon {\n    line-height: 1.5; }\n\n.mat-input-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-input-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-input-placeholder {\n  top: 1.28125em; }\n  .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused .mat-input-placeholder.mat-float {\n    -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n            transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333333%; }\n\n.mat-input-underline {\n  bottom: 1.296875em; }\n\n.mat-input-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.60416667em;\n  top: calc(100% - 1.72916667em); }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader {\n  font: 500 12px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-selected.mat-primary, .mat-primary .mat-option.mat-selected {\n    color: #3f51b5; }\n  .mat-option.mat-selected.mat-accent, .mat-accent .mat-option.mat-selected {\n    color: #ff4081; }\n  .mat-option.mat-selected.mat-warn, .mat-warn .mat-option.mat-selected {\n    color: #f44336; }\n  .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked.mat-primary,\n.mat-pseudo-checkbox-indeterminate.mat-primary,\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n\n.mat-pseudo-checkbox-checked.mat-accent,\n.mat-pseudo-checkbox-indeterminate.mat-accent,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081; }\n\n.mat-pseudo-checkbox-checked.mat-warn,\n.mat-pseudo-checkbox-indeterminate.mat-warn,\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #3f51b5; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #ff4081; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff4081; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: black; }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-chip.mat-chip-selected:not(.mat-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent {\n    background-color: #ff4081;\n    color: white; }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn {\n    background-color: #f44336;\n    color: white; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: black; }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel-header:focus,\n.mat-expansion-panel-header:hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n\n.mat-icon.mat-accent {\n  color: #ff4081; }\n\n.mat-icon.mat-warn {\n  color: #f44336; }\n\n.mat-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-focused .mat-input-placeholder {\n  color: #3f51b5; }\n  .mat-focused .mat-input-placeholder.mat-accent {\n    color: #ff4081; }\n  .mat-focused .mat-input-placeholder.mat-warn {\n    color: #f44336; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\ninput.mat-input-element:-webkit-autofill + .mat-input-placeholder .mat-placeholder-required,\n.mat-focused .mat-input-placeholder.mat-float .mat-placeholder-required {\n  color: #ff4081; }\n\n.mat-input-underline {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-input-ripple {\n  background-color: #3f51b5; }\n  .mat-input-ripple.mat-accent {\n    background-color: #ff4081; }\n  .mat-input-ripple.mat-warn {\n    background-color: #f44336; }\n\n.mat-input-invalid .mat-input-placeholder {\n  color: #f44336; }\n  .mat-input-invalid .mat-input-placeholder.mat-accent,\n  .mat-input-invalid .mat-input-placeholder.mat-float .mat-placeholder-required {\n    color: #f44336; }\n\n.mat-input-invalid .mat-input-ripple {\n  background-color: #f44336; }\n\n.mat-input-error {\n  color: #f44336; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-content {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-menu-item .mat-icon {\n    color: rgba(0, 0, 0, 0.54);\n    vertical-align: middle; }\n  .mat-menu-item:hover:not([disabled]), .mat-menu-item:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff80ab%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n\n.mat-progress-spinner path, .mat-spinner path {\n  stroke: #3f51b5; }\n\n.mat-progress-spinner.mat-accent path, .mat-spinner.mat-accent path {\n  stroke: #ff4081; }\n\n.mat-progress-spinner.mat-warn path, .mat-spinner.mat-warn path {\n  stroke: #f44336; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #ff4081; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-select-trigger,\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-underline {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-select-disabled .mat-select-value,\n.mat-select-arrow,\n.mat-select-trigger {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-underline {\n  background-color: #3f51b5; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-arrow {\n  color: #ff4081; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-underline {\n  background-color: #ff4081; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-arrow,\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger,\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow {\n  color: #f44336; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-underline,\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline {\n  background-color: #f44336; }\n\n.mat-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-sidenav.mat-sidenav-push {\n    background-color: white; }\n\n.mat-sidenav-backdrop.mat-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(233, 30, 99, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: black; }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.mat-ink-bar {\n  background-color: #3f51b5; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-toolbar.mat-accent {\n    background: #ff4081;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n#menu {\n  overflow: hidden;\n  background-color: #5f99cf; }\n  #menu .logo {\n    position: relative;\n    text-align: center;\n    width: 20%;\n    height: 60px;\n    float: left;\n    padding: 5px; }\n    @media (min-width: 320px) and (max-width: 780px) {\n      #menu .logo {\n        width: 40%; } }\n    #menu .logo img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      cursor: pointer;\n      height: 40px;\n      transition: 300ms; }\n      #menu .logo img.accent {\n        box-sizing: content-box;\n        padding: 5px;\n        box-shadow: 0 0 2px 2px #eee;\n        z-index: 9000; }\n  #menu ul {\n    padding: 0;\n    float: left;\n    display: block;\n    overflow: hidden;\n    list-style: none;\n    width: 60%; }\n    @media (min-width: 320px) and (max-width: 780px) {\n      #menu ul {\n        display: none; } }\n    #menu ul li {\n      float: left;\n      width: 14.28571429%; }\n      #menu ul li a {\n        font-size: 14px;\n        text-align: center;\n        width: 100%;\n        color: white;\n        text-decoration: none;\n        display: inline-block;\n        line-height: 0;\n        padding: 30px 0; }\n        #menu ul li a:hover, #menu ul li a.active {\n          background-color: white;\n          color: #5f99cf; }\n  #menu .user {\n    padding-top: 5px;\n    text-align: center;\n    float: left;\n    width: 20%; }\n    @media (min-width: 320px) and (max-width: 780px) {\n      #menu .user {\n        display: none; } }\n    #menu .user img {\n      height: 50px;\n      border-radius: 50px; }\n  #menu .mobile-menu-icon {\n    width: 30%;\n    text-align: center;\n    float: right; }\n    @media (min-width: 780px) {\n      #menu .mobile-menu-icon {\n        display: none; } }\n    #menu .mobile-menu-icon md-icon {\n      color: white;\n      width: 100%;\n      display: block;\n      line-height: 0;\n      padding: 30px; }\n\n.mobile-menu {\n  width: 200px;\n  color: white;\n  background: #5f99cf; }\n  .mobile-menu .search {\n    margin: 10px; }\n  .mobile-menu .user {\n    padding-top: 5px;\n    text-align: center;\n    width: 100%; }\n    .mobile-menu .user img {\n      height: 50px;\n      border-radius: 50px; }\n  .mobile-menu ul {\n    padding: 0; }\n    .mobile-menu ul li {\n      width: 100%; }\n      .mobile-menu ul li a {\n        font-size: 14px;\n        text-align: center;\n        width: 100%;\n        color: white;\n        text-decoration: none;\n        display: inline-block;\n        line-height: 0;\n        padding: 30px 0; }\n        .mobile-menu ul li a:hover, .mobile-menu ul li a.active {\n          background-color: white;\n          color: #5f99cf; }\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody, html {\n  height: 100%; }\n\n.mobile-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%; }\n\n.clr {\n  clear: both; }\n\n.container {\n  margin: 0 auto;\n  min-width: 850px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nmd-sidenav-container {\n  background: white !important;\n  height: calc(100% - 60px); }\n\nmain {\n  height: 100%;\n  padding: 20px;\n  float: left;\n  overflow: auto;\n  padding: 0 200px;\n  width: 100%; }\n  @media (min-width: 780px) and (max-width: 900px) {\n    main {\n      padding: 0 150px; } }\n  @media (min-width: 320px) and (max-width: 780px) {\n    main {\n      padding: 0;\n      margin: 0;\n      width: 100%; } }\n\n.list {\n  height: 50%; }\n\nul {\n  list-style: none;\n  padding: 10px; }\n  ul li a {\n    text-decoration: none;\n    color: white;\n    display: block;\n    padding: 3px 0; }\n    ul li a:hover {\n      color: #5f99cf;\n      background: white; }\n\n.separator-light {\n  text-align: center;\n  width: 80%;\n  line-height: 20px;\n  padding: 20px 0;\n  margin: 20px auto;\n  border-bottom: 2px dashed #d5e4f2; }\n\n.side-bar {\n  display: none;\n  height: 100%;\n  background: #5f99cf;\n  color: white;\n  padding: 0 20px;\n  width: 20%;\n  float: left; }\n  @media (min-width: 780px) {\n    .side-bar {\n      display: initial; } }\n\n.search {\n  border-radius: 10px;\n  padding: 5px;\n  overflow: hidden;\n  background: white;\n  color: #5f99cf; }\n  .search md-input-container {\n    display: block;\n    margin: 0 auto;\n    width: 80%; }\n  .search md-icon {\n    color: rgba(0, 0, 0, 0.5); }\n\n* {\n  font-family: 'Roboto Slab', serif; }\n\n.btn {\n  text-align: center;\n  display: block;\n  text-decoration: none;\n  margin-top: 10px;\n  margin: 20px auto;\n  color: #5f99cf;\n  transition: 500ms ease; }\n  .btn:hover {\n    text-decoration: underline; }\n\n.mobile-btn {\n  background: transparent;\n  text-align: center;\n  display: block;\n  text-decoration: none;\n  margin: 20px auto;\n  color: white; }\n  @media (min-width: 780px) {\n    .mobile-btn {\n      display: none; } }\n\n.mobile-bottom-btn {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  background: transparent;\n  text-align: center;\n  display: block;\n  text-decoration: none;\n  margin: 20px auto;\n  color: white; }\n  @media (min-width: 780px) {\n    .mobile-bottom-btn {\n      display: none; } }\n\n.mobile-btn-primary {\n  margin: 30px auto;\n  text-align: center;\n  position: relative;\n  text-decoration: none;\n  display: block;\n  width: 80%;\n  padding: 20px;\n  line-height: 0;\n  color: #5f99cf;\n  background: white;\n  border-radius: 10px; }\n  @media (min-width: 780px) {\n    .mobile-btn-primary {\n      display: none; } }\n\n.btn-primary {\n  position: relative;\n  text-decoration: none;\n  margin-top: 10px;\n  display: block;\n  padding: 20px 40%;\n  line-height: 0;\n  color: white;\n  background: #5f99cf;\n  border-radius: 10px;\n  transition: 500ms ease;\n  overflow: hidden;\n  cursor: pointer; }\n  .btn-primary:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.votation {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-40%);\n          transform: translateY(-40%);\n  height: 100%;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 30px;\n  text-align: center;\n  width: 15%;\n  float: left; }\n  .votation a {\n    color: rgba(0, 0, 0, 0.5);\n    text-decoration: none; }\n    .votation a md-icon {\n      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n      .votation a md-icon:hover {\n        -webkit-transform: scale(2);\n                transform: scale(2); }\n\n.card {\n  float: left;\n  width: 80%;\n  height: 100%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .card:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .card md-card-actions {\n    color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden; }\n    .card md-card-actions md-icon {\n      margin: 5px 0;\n      float: right;\n      display: block;\n      width: 20%; }\n\n.mobile-header {\n  width: 100%;\n  overflow: hidden; }\n  @media (min-width: 400px) {\n    .mobile-header {\n      display: none !important; } }\n\n.header {\n  height: 80px;\n  width: 100%;\n  overflow: hidden; }\n  @media (min-width: 320px) and (max-width: 400px) {\n    .header {\n      display: none !important; } }\n\n@media (min-width: 400px) {\n  .header-image {\n    width: 20%;\n    float: left;\n    height: 100%; } }\n\n.header-image img {\n  margin: 0 auto;\n  display: block; }\n  @media (min-width: 400px) {\n    .header-image img {\n      display: inline-block;\n      height: 100%; } }\n\n@media (min-width: 400px) {\n  .header-title {\n    float: left;\n    width: 80%;\n    padding-left: 20px; } }\n\n@-webkit-keyframes floating-horizontal {\n  from {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); }\n  25% {\n    -webkit-transform: translate(-15px, 0px);\n            transform: translate(-15px, 0px); }\n  65% {\n    -webkit-transform: translate(15px, 0px);\n            transform: translate(15px, 0px); }\n  to {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); } }\n\n@keyframes floating-horizontal {\n  from {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); }\n  25% {\n    -webkit-transform: translate(-15px, 0px);\n            transform: translate(-15px, 0px); }\n  65% {\n    -webkit-transform: translate(15px, 0px);\n            transform: translate(15px, 0px); }\n  to {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); } }\n\n@-webkit-keyframes floating-smooth {\n  from {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); }\n  25% {\n    -webkit-transform: translate(0, -2px);\n            transform: translate(0, -2px); }\n  65% {\n    -webkit-transform: translate(0, 2px);\n            transform: translate(0, 2px); }\n  to {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); } }\n\n@keyframes floating-smooth {\n  from {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); }\n  25% {\n    -webkit-transform: translate(0, -2px);\n            transform: translate(0, -2px); }\n  65% {\n    -webkit-transform: translate(0, 2px);\n            transform: translate(0, 2px); }\n  to {\n    -webkit-transform: translate(0, 0px);\n            transform: translate(0, 0px); } }\n\n.welcome-header {\n  padding: 20px;\n  width: 100%;\n  text-align: center;\n  font-family: 'Varela Round', sans-serif; }\n  .welcome-header .logo {\n    height: 70px; }\n\n.bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -50;\n  background: filter-gradient(#499bea, #499bea, vertical);\n  background: linear-gradient(to bottom, #499bea 0%, #207ce5 21%, #499bea 47%, #499bea 100%); }\n\n.back-layer-1 {\n  background-image: url(/assets/img/mountains-back.png);\n  background-size: cover;\n  background-position-y: 250px;\n  background-repeat: no-repeat;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -25; }\n\n.back-layer-2 {\n  background-image: url(/assets/img/mountains-mid1.png);\n  background-size: cover;\n  background-position-y: 250px;\n  background-repeat: no-repeat;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -25; }\n\n.cloud {\n  position: absolute;\n  width: 100px;\n  bottom: 20%;\n  -webkit-animation-name: floating-horizontal;\n          animation-name: floating-horizontal;\n  -webkit-animation-duration: 7s;\n          animation-duration: 7s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n  .cloud.position-1 {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    left: 20%; }\n  .cloud.position-2 {\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    left: 40%;\n    -webkit-animation-direction: reverse;\n            animation-direction: reverse;\n    bottom: 18%; }\n    @media (min-width: 320px) and (max-width: 780px) {\n      .cloud.position-2 {\n        display: none; } }\n  .cloud.position-3 {\n    -webkit-animation-delay: 1.5s;\n            animation-delay: 1.5s;\n    left: 60%; }\n    @media (min-width: 320px) and (max-width: 780px) {\n      .cloud.position-3 {\n        display: none; } }\n  .cloud.position-4 {\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    left: 80%;\n    -webkit-animation-direction: reverse;\n            animation-direction: reverse;\n    bottom: 18%; }\n\n.vertical-separator {\n  height: 250px;\n  margin: 0 20px;\n  display: inline-block;\n  border-right: 1px solid #d5e4f2; }\n  @media (min-width: 320px) and (max-width: 780px) {\n    .vertical-separator {\n      display: none; } }\n\n.login {\n  padding: 20px;\n  overflow: hidden;\n  height: 250px;\n  display: inline-block;\n  background-color: #d5e4f2;\n  color: #224c73;\n  width: 400px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  @media (min-width: 320px) and (max-width: 780px) {\n    .login {\n      display: none; } }\n  .login h1 {\n    font-size: 22px;\n    margin: 10px 0;\n    width: 100%;\n    text-align: center; }\n  .login:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.login-fields, .mobile-login-fields {\n  background-color: white;\n  overflow: hidden;\n  height: 100px;\n  width: 100%;\n  border-radius: 10px; }\n  .login-fields.sign-up, .sign-up.mobile-login-fields {\n    background: rgba(255, 255, 255, 0.7); }\n  .login-fields input, .mobile-login-fields input {\n    background: transparent;\n    color: #5f99cf;\n    border: none;\n    display: block;\n    margin: 0 auto;\n    height: 50%;\n    width: 80%;\n    border-bottom: 1px solid #eee; }\n    .login-fields input.last, .mobile-login-fields input.last {\n      border: none; }\n    .login-fields input:focus, .mobile-login-fields input:focus {\n      outline: none; }\n\n.mobile-login-fields {\n  width: 80%;\n  margin: 0 auto; }\n  @media (min-width: 780px) {\n    .mobile-login-fields {\n      display: none; } }\n\n.balloon {\n  top: 10%;\n  right: 10%;\n  position: absolute;\n  -webkit-animation-name: floating-smooth;\n          animation-name: floating-smooth;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  z-index: 10; }\n  @media (min-width: 320px) and (max-width: 780px) {\n    .balloon {\n      top: 60%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.openLoginForm = false;
        this.register = false;
    };
    WelcomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'welcome',
            template: __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/welcome/welcome.component.scss")],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyInOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(0.25, 0.8, 0.25, 1)')
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_component__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\">\r\n    <section class=\"logo\" >\r\n        <a (click)=\"openLeftMenu()\" >\r\n            <img src=\"assets/logo.png\" [class.accent]=\"accent\" alt=\"\">\r\n        </a>\r\n    </section>\r\n    <nav-posts></nav-posts>\r\n    <div class=\"user\">\r\n        <img src=\"assets/img/user.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"mobile-menu-icon\">\r\n        <md-icon (click)=\"openRightMenu()\">\r\n            menu\r\n        </md-icon>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(dialog) {
        this.dialog = dialog;
        this.accent = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accent = true;
        this.dialog.open(TooltipComponent, {
            position: { top: '60px', left: '10%' },
        });
        this.dialog.afterAllClosed.subscribe(function () {
            _this.accent = false;
        });
    };
    MenuComponent.prototype.openLeftMenu = function () {
        if (this.leftBar.opened) {
            this.leftBar.close();
        }
        else {
            this.leftBar.open();
        }
    };
    MenuComponent.prototype.openRightMenu = function () {
        if (this.rightBar.opened) {
            this.rightBar.close();
        }
        else {
            this.rightBar.open();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSidenav */]) === "function" && _a || Object)
    ], MenuComponent.prototype, "rightBar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSidenav */]) === "function" && _b || Object)
    ], MenuComponent.prototype, "leftBar", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'menu',
            template: __webpack_require__("../../../../../src/app/theme/components/menu/menu.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */]) === "function" && _c || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c;
}());

var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () { };
    TooltipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <p> This is Reddit! Please welcome! <br> <span> Change to any subreddit clicking on the logo!</span> </p>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/nav-posts/nav-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a href=\"\" class=\"active\">Hot</a></li>\n  <li><a href=\"\">New</a></li>\n  <li><a href=\"\">Rising</a></li>\n  <li><a href=\"\">Controversial</a></li>\n  <li><a href=\"\">Top</a></li>\n  <li><a href=\"\">Gilded</a></li>\n  <li><a href=\"\">Promoted</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/theme/components/nav-posts/nav-posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/nav-posts/nav-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavPostsComponent = (function () {
    function NavPostsComponent() {
    }
    NavPostsComponent.prototype.ngOnInit = function () {
    };
    NavPostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-posts',
            template: __webpack_require__("../../../../../src/app/theme/components/nav-posts/nav-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/nav-posts/nav-posts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavPostsComponent);
    return NavPostsComponent;
}());

//# sourceMappingURL=nav-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/post/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_component__ = __webpack_require__("../../../../../src/app/theme/components/post/post.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__post_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"votation\">\n  <a href=\"main-page/\">\n    <md-icon>keyboard_arrow_up</md-icon>\n  </a>\n  <p>1</p>\n  <a href=\"main-page/\">\n    <md-icon>keyboard_arrow_down</md-icon>\n  </a>\n</div>\n\n<md-card class=\"card\">\n\n  <div class=\"mobile-header\">\n    <div class=\"header-image\">\n      <img [src]=\"'http://lorempixel.com/150/150/' + post?.type\" alt=\"\">\n    </div>\n    <div class=\"header-title\">\n      <md-card-title>{{post?.title}}</md-card-title>\n      <md-card-subtitle>submitted {{post?.time}} ago by <a href=\".\" class=\"author\">{{post?.author}}</a></md-card-subtitle>\n    </div>\n  </div>\n\n  <md-card-header class=\"header\">\n    <div class=\"header-image\">\n      <img [src]=\"'http://lorempixel.com/150/150/' + post?.type\" alt=\"\">\n    </div>\n    <div class=\"header-title\">\n      <md-card-title>{{post?.title}}</md-card-title>\n      <md-card-subtitle>submitted {{post?.time}} ago by <a href=\".\" class=\"author\">{{post?.author}}</a></md-card-subtitle>\n    </div>\n  </md-card-header>\n  <md-card-actions>\n    <md-icon>warning</md-icon>\n    <md-icon>share</md-icon>\n    <md-icon>mode_comment</md-icon>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/theme/components/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin: 20px 0;\n  display: block;\n  height: 150px; }\n  @media screen and (max-width: 400px) {\n    :host {\n      height: 450px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post',
            template: __webpack_require__("../../../../../src/app/theme/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/subreddits/subreddits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"separator-light\">\n  popular subreddits\n</div>\n<div class=\"list\" malihu-scrollbar [scrollbarOptions]=\"{theme: 'minimal-dark' }\">\n  <ul>\n    <li><a href=\"#\">ASKREDDIT</a></li>\n    <li><a href=\"#\">NEWS</a></li>\n    <li><a href=\"#\">FUNNY</a></li>\n    <li><a href=\"#\">PICS</a></li>\n    <li><a href=\"#\">WORLDNEWS</a></li>\n    <li><a href=\"#\">TODAYILEARNED</a></li>\n    <li><a href=\"#\">VIDEOS</a></li>\n    <li><a href=\"#\">MOVIES</a></li>\n    <li><a href=\"#\">GIFS</a></li>\n    <li><a href=\"#\">AWW</a></li>\n    <li><a href=\"#\">GAMING</a></li>\n    <li><a href=\"#\">MILDLYINTERESTING</a></li>\n    <li><a href=\"#\">SHOWERTHOUGHTS</a></li>\n    <li><a href=\"#\">MUSIC</a></li>\n    <li><a href=\"#\">JOKES</a></li>\n    <li><a href=\"#\">SCIENCE</a></li>\n    <li><a href=\"#\">IAMA</a></li>\n    <li><a href=\"#\">NOTTHEONION</a></li>\n    <li><a href=\"#\">OLDSCHOOLCOOL</a></li>\n    <li><a href=\"#\">TELEVISION</a></li>\n    <li><a href=\"#\">BOOKS</a></li>\n    <li><a href=\"#\">LIFEPROTIPS</a></li>\n    <li><a href=\"#\">TIFU-SPORTS</a></li>\n    <li><a href=\"#\">EXPLAINLIKEIMFIVE</a></li>\n    <li><a href=\"#\">FUTUROLOGY</a></li>\n    <li><a href=\"#\">HISTORY</a></li>\n    <li><a href=\"#\">FOOD</a></li>\n    <li><a href=\"#\">PHOTOSHOPBATTLES</a></li>\n    <li><a href=\"#\">DOCUMENTARIES</a></li>\n    <li><a href=\"#\">DATAISBEAUTIFUL</a></li>\n    <li><a href=\"#\">SPACE</a></li>\n    <li><a href=\"#\">WRITINGPROMPTS</a></li>\n    <li><a href=\"#\">UPLIFTINGNEWS</a></li>\n    <li><a href=\"#\">TWOXCHROMOSOMES</a></li>\n    <li><a href=\"#\">PERSONALFINANCE</a></li>\n    <li><a href=\"#\">ASKSCIENCE</a></li>\n    <li><a href=\"#\">ART</a></li>\n    <li><a href=\"#\">MORE »</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/subreddits/subreddits.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/subreddits/subreddits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubredditsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubredditsComponent = (function () {
    function SubredditsComponent() {
    }
    SubredditsComponent.prototype.ngOnInit = function () {
    };
    SubredditsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'subreddits',
            template: __webpack_require__("../../../../../src/app/theme/components/subreddits/subreddits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/subreddits/subreddits.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubredditsComponent);
    return SubredditsComponent;
}());

//# sourceMappingURL=subreddits.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu__ = __webpack_require__("../../../../../src/app/theme/components/menu/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post__ = __webpack_require__("../../../../../src/app/theme/components/post/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav_posts_nav_posts_component__ = __webpack_require__("../../../../../src/app/theme/components/nav-posts/nav-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_subreddits_subreddits_component__ = __webpack_require__("../../../../../src/app/theme/components/subreddits/subreddits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__ = __webpack_require__("../../../../ngx-malihu-scrollbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_theme_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [
    __WEBPACK_IMPORTED_MODULE_1__components_menu__["a" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_post__["a" /* PostComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_nav_posts_nav_posts_component__["a" /* NavPostsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_subreddits_subreddits_component__["a" /* SubredditsComponent */],
    __WEBPACK_IMPORTED_MODULE_7_app_theme_components_menu_menu_component__["a" /* TooltipComponent */]
];
var ThemeModule = (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["a" /* MalihuScrollbarModule */].forRoot(),
            ],
            exports: components.concat([__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */]]),
            declarations: components.slice(),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7_app_theme_components_menu_menu_component__["a" /* TooltipComponent */]
            ],
            providers: [],
        })
    ], ThemeModule);
    return ThemeModule;
}());

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map