webpackJsonp([0],{

/***/ "../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<post *ngFor=\"let post of posts\" [post]=\"post\"></post>"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotPostsComponent = (function () {
    function HotPostsComponent() {
        this.posts = [
            {
                author: 'user1',
                type: 'abstract',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
            }, {
                author: 'johndoe123',
                type: 'food',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
            }, {
                author: 'mariedoe_asdf',
                type: 'sports',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
            }, {
                author: 'asdf-asdf',
                type: 'transport',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
            }, {
                author: 'uuser123',
                type: 'nature',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
            },
        ];
    }
    HotPostsComponent.prototype.ngOnInit = function () {
    };
    HotPostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hot-posts',
            template: __webpack_require__("../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HotPostsComponent);
    return HotPostsComponent;
}());

//# sourceMappingURL=hot-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/categories/hot-posts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hot_posts_component__ = __webpack_require__("../../../../../src/app/pages/main-page/categories/hot-posts/hot-posts.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hot_posts_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_page_routing__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.routing.ts");
/* unused harmony reexport MainPageRoutingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_module__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.module.ts");
/* unused harmony reexport MainPageModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__main_page_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<menu [rightBar]=\"sidenav\" [leftBar]=\"sidenavRight\">\r\n</menu>\r\n<md-sidenav-container>\r\n    <md-sidenav #sidenav align=\"end\" class=\"mobile-menu\">\r\n        <div class=\"user\">\r\n            <img src=\"assets/img/user.png\" alt=\"\">\r\n        </div>\r\n        <nav-posts></nav-posts>\r\n    </md-sidenav>\r\n    <md-sidenav #sidenavRight align=\"start\" class=\"mobile-menu\">\r\n        <div class=\"search\">\r\n            <md-input-container class=\"example-full-width\">\r\n                <input type=\"tel\" mdInput placeholder=\"Search\">\r\n                <md-icon mdSuffix>search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n        <subreddits></subreddits>\r\n    </md-sidenav>\r\n    <main malihu-scrollbar [scrollbarOptions]=\"{ axis: 'yx', theme: 'minimal-dark' }\">\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <!--<aside class=\"side-bar\">\r\n        <div class=\"search\">\r\n            <md-input-container class=\"example-full-width\">\r\n                <input type=\"tel\" mdInput placeholder=\"Search\">\r\n                <md-icon mdSuffix>search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n        <subreddits></subreddits>\r\n    </aside>-->\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () { };
    MainPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-page',
            template: __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__ = __webpack_require__("../../../../ngx-malihu-scrollbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_page_routing__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__main_page_routing__["a" /* MainPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__["a" /* MalihuScrollbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSidenavModule */]
            ],
            exports: [],
            declarations: __WEBPACK_IMPORTED_MODULE_5__main_page_routing__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main-page.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_hot_posts___ = __webpack_require__("../../../../../src/app/pages/main-page/categories/hot-posts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__("../../../../../src/app/pages/main-page/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3____["a" /* MainPageComponent */],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'hot-posts' },
            { path: 'hot-posts', component: __WEBPACK_IMPORTED_MODULE_0__categories_hot_posts___["a" /* HotPostsComponent */] },
        ]
    },
];
var MainPageRoutingModule = (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_3____["a" /* MainPageComponent */],
    __WEBPACK_IMPORTED_MODULE_0__categories_hot_posts___["a" /* HotPostsComponent */]
];
//# sourceMappingURL=main-page.routing.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map