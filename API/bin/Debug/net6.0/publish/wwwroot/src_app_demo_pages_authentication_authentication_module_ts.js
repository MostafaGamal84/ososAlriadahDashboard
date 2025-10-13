"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_authentication_authentication_module_ts"],{

/***/ 51151:
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'signup',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-signup_auth-signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-signup/auth-signup.module */ 55593)).then((module) => module.AuthSignupModule)
            },
            {
                path: 'signup-v2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_Services_baseService_base-service_service_ts-src_app_demo__helpers_apiPa-51c650"), __webpack_require__.e("default-src_app_demo_Services_AccountController_service_ts-node_modules_angular_material_fesm-06962b"), __webpack_require__.e("src_app_demo_pages_authentication_auth-signup-v2_auth-signup-v2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-signup-v2/auth-signup-v2.module */ 41502)).then((module) => module.AuthSignupV2Module)
            },
            {
                path: 'signin',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-signin_auth-signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-signin/auth-signin.module */ 5819)).then((module) => module.AuthSigninModule)
            },
            {
                path: 'signin-v2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-signin-v2_auth-signin-v2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-signin-v2/auth-signin-v2.module */ 36380)).then((module) => module.AuthSigninV2Module)
            },
            {
                path: 'reset-password',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-reset-password_auth-reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-reset-password/auth-reset-password.module */ 29797)).then((module) => module.AuthResetPasswordModule)
            },
            {
                path: 'reset-password-v2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-reset-password-v2_auth-reset-password-v2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-reset-password-v2/auth-reset-password-v2.module */ 50290)).then((module) => module.AuthResetPasswordV2Module)
            },
            {
                path: 'change-password',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-change-password_auth-change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-change-password/auth-change-password.module */ 15963)).then((module) => module.AuthChangePasswordModule)
            },
            {
                path: 'change-password-v2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-change-password-v2_auth-change-password-v2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-change-password-v2/auth-change-password-v2.module */ 1984)).then((module) => module.AuthChangePasswordV2Module)
            },
            {
                path: 'personal-information',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-personal-info_auth-personal-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-personal-info/auth-personal-info.module */ 4320)).then((module) => module.AuthPersonalInfoModule)
            },
            {
                path: 'profile-settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_auth-profile-settings_auth-profile-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth-profile-settings/auth-profile-settings.module */ 77962)).then((module) => module.AuthProfileSettingsModule)
            }
        ]
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 4168:
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 51151);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_authentication_module_ts.js.map