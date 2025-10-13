"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_membership_membership_module_ts"],{

/***/ 27513:
/*!*********************************************************************!*\
  !*** ./src/app/demo/panels/membership/membership-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipRoutingModule": () => (/* binding */ MembershipRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'mshp-membership',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_Services_baseService_base-service_service_ts-src_app_demo__helpers_apiPa-51c650"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_js-node_modules_sweetalert2_src_sweetalert2_scss"), __webpack_require__.e("default-src_app_demo_panels_membership_mshp-membershipType_mshp-membershipType_module_ts"), __webpack_require__.e("src_app_demo_panels_membership_mshp-membership_mshp-membership_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-membership/mshp-membership.module */ 13174)).then((module) => module.MshpMembershipModule)
            },
            {
                path: 'mshp-membershipType',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_Services_baseService_base-service_service_ts-src_app_demo__helpers_apiPa-51c650"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_js-node_modules_sweetalert2_src_sweetalert2_scss"), __webpack_require__.e("default-src_app_demo_panels_membership_mshp-membershipType_mshp-membershipType_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-membershipType/mshp-membershipType.module */ 43967)).then((module) => module.MshpMembershipTypeModule)
            },
            {
                path: 'mshp-membership-select',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_Services_baseService_base-service_service_ts-src_app_demo__helpers_apiPa-51c650"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_js-node_modules_sweetalert2_src_sweetalert2_scss"), __webpack_require__.e("src_app_demo_panels_membership_mshp-membership-select_mshp-membership-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-membership-select/mshp-membership-select.module */ 82251)).then((module) => module.MshpMembershipSelectModule)
            },
            {
                path: 'user-profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_Services_baseService_base-service_service_ts-src_app_demo__helpers_apiPa-51c650"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_js-node_modules_sweetalert2_src_sweetalert2_scss"), __webpack_require__.e("default-src_app_demo_Services_AccountController_service_ts-node_modules_angular_material_fesm-06962b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_membership_user-profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../membership/user-profile/user-profile.module */ 7428)).then((module) => module.UserProfileModule)
            }
        ]
    }
];
class MembershipRoutingModule {
}
MembershipRoutingModule.ɵfac = function MembershipRoutingModule_Factory(t) { return new (t || MembershipRoutingModule)(); };
MembershipRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MembershipRoutingModule });
MembershipRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MembershipRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 72738:
/*!*************************************************************!*\
  !*** ./src/app/demo/panels/membership/membership.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipModule": () => (/* binding */ MembershipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership-routing.module */ 27513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MembershipModule {
}
MembershipModule.ɵfac = function MembershipModule_Factory(t) { return new (t || MembershipModule)(); };
MembershipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MembershipModule });
MembershipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MembershipModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_membership_membership_module_ts.js.map