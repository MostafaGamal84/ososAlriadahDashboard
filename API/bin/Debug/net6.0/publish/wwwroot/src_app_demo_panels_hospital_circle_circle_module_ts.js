"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_hospital_circle_circle_module_ts"],{

/***/ 54282:
/*!**********************************************************************!*\
  !*** ./src/app/demo/panels/hospital/circle/circle-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleRoutingModule": () => (/* binding */ CircleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _circle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.component */ 10213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _circle_component__WEBPACK_IMPORTED_MODULE_0__.CircleComponent
    }
];
class CircleRoutingModule {
}
CircleRoutingModule.ɵfac = function CircleRoutingModule_Factory(t) { return new (t || CircleRoutingModule)(); };
CircleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CircleRoutingModule });
CircleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CircleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 67714:
/*!**************************************************************!*\
  !*** ./src/app/demo/panels/hospital/circle/circle.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleModule": () => (/* binding */ CircleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ 17446);
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-select */ 69774);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ 20865);
/* harmony import */ var _circle_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-routing.module */ 54282);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 51282);
/* harmony import */ var src_app_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/components/select/select-option.service */ 22853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class CircleModule {
}
CircleModule.ɵfac = function CircleModule_Factory(t) { return new (t || CircleModule)(); };
CircleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CircleModule });
CircleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__.SelectOptionService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _circle_routing_module__WEBPACK_IMPORTED_MODULE_1__.CircleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule,
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CircleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _circle_routing_module__WEBPACK_IMPORTED_MODULE_1__.CircleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule,
        angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_hospital_circle_circle_module_ts.js.map