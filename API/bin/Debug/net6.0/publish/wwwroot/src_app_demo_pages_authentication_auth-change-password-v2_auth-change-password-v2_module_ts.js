"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_authentication_auth-change-password-v2_auth-change-password-v2_module_ts"],{

/***/ 52581:
/*!*************************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password-v2/auth-change-password-v2-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthChangePasswordV2RoutingModule": () => (/* binding */ AuthChangePasswordV2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_change_password_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-change-password-v2.component */ 71905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _auth_change_password_v2_component__WEBPACK_IMPORTED_MODULE_0__.AuthChangePasswordV2Component
    }
];
class AuthChangePasswordV2RoutingModule {
}
AuthChangePasswordV2RoutingModule.ɵfac = function AuthChangePasswordV2RoutingModule_Factory(t) { return new (t || AuthChangePasswordV2RoutingModule)(); };
AuthChangePasswordV2RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthChangePasswordV2RoutingModule });
AuthChangePasswordV2RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthChangePasswordV2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71905:
/*!********************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password-v2/auth-change-password-v2.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthChangePasswordV2Component": () => (/* binding */ AuthChangePasswordV2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AuthChangePasswordV2Component {
    constructor() { }
    ngOnInit() { }
}
AuthChangePasswordV2Component.ɵfac = function AuthChangePasswordV2Component_Factory(t) { return new (t || AuthChangePasswordV2Component)(); };
AuthChangePasswordV2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthChangePasswordV2Component, selectors: [["app-auth-change-password-v2"]], decls: 35, vars: 0, consts: [[1, "auth-wrapper", "align-items-stretch", "aut-bg-img"], [1, "flex-grow-1"], [1, "h-100", "d-md-flex", "align-items-center", "auth-side-img"], [1, "col-sm-10", "auth-content", "w-auto"], ["src", "assets/images/auth/auth-logo.png", "alt", "", 1, "img-fluid"], [1, "text-white", "my-4"], [1, "text-white", "font-weight-normal"], [1, "auth-side-form"], [1, "auth-content"], ["src", "assets/images/auth/auth-logo-dark.png", "alt", "", 1, "img-fluid", "mb-4", "d-block", "d-xl-none", "d-lg-none"], [1, "input-group", "mb-4"], [1, "mb-4", "f-w-400"], [1, "input-group", "mb-2"], ["type", "password", "placeholder", "Current Password", 1, "form-control"], ["type", "password", "placeholder", "New Password", 1, "form-control"], ["type", "password", "placeholder", "Re-Type New Password", 1, "form-control"], [1, "btn", "btn-block", "btn-primary", "mb-4"], [1, "text-center"], [1, "saprator", "my-4"], [1, "btn", "text-white", "bg-facebook", "mb-2", "mr-2", "wid-40", "px-0", "hei-40", "rounded-circle"], [1, "fab", "fa-facebook-f"], [1, "btn", "text-white", "bg-googleplus", "mb-2", "mr-2", "wid-40", "px-0", "hei-40", "rounded-circle"], [1, "fab", "fa-google-plus-g"], [1, "btn", "text-white", "bg-twitter", "mb-2", "wid-40", "px-0", "hei-40", "rounded-circle"], [1, "fab", "fa-twitter"]], template: function AuthChangePasswordV2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Change securely!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Change your account password and make your self more securely Able Pro Dashboard Template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Do not forget to play with live customizer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Change your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWNoYW5nZS1wYXNzd29yZC12Mi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1984:
/*!*****************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password-v2/auth-change-password-v2.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthChangePasswordV2Module": () => (/* binding */ AuthChangePasswordV2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auth_change_password_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-change-password-v2-routing.module */ 52581);
/* harmony import */ var _auth_change_password_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-change-password-v2.component */ 71905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AuthChangePasswordV2Module {
}
AuthChangePasswordV2Module.ɵfac = function AuthChangePasswordV2Module_Factory(t) { return new (t || AuthChangePasswordV2Module)(); };
AuthChangePasswordV2Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthChangePasswordV2Module });
AuthChangePasswordV2Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_change_password_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthChangePasswordV2RoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthChangePasswordV2Module, { declarations: [_auth_change_password_v2_component__WEBPACK_IMPORTED_MODULE_1__.AuthChangePasswordV2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_change_password_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthChangePasswordV2RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_auth-change-password-v2_auth-change-password-v2_module_ts.js.map