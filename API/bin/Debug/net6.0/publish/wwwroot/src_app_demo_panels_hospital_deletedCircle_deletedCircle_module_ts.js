"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_hospital_deletedCircle_deletedCircle_module_ts"],{

/***/ 1474:
/*!************************************************************************************!*\
  !*** ./src/app/demo/panels/hospital/deletedCircle/deletedCircle-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedCircleRoutingModule": () => (/* binding */ DeletedCircleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _deletedCircle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletedCircle.component */ 39600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _deletedCircle_component__WEBPACK_IMPORTED_MODULE_0__.DeletedCircleComponent
    }
];
class DeletedCircleRoutingModule {
}
DeletedCircleRoutingModule.ɵfac = function DeletedCircleRoutingModule_Factory(t) { return new (t || DeletedCircleRoutingModule)(); };
DeletedCircleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DeletedCircleRoutingModule });
DeletedCircleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeletedCircleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81739:
/*!****************************************************************************!*\
  !*** ./src/app/demo/panels/hospital/deletedCircle/deletedCircle.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedCircleModule": () => (/* binding */ DeletedCircleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-dual-listbox */ 17446);
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-select */ 69774);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ 20865);
/* harmony import */ var _deletedCircle_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deletedCircle-routing.module */ 1474);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 51282);
/* harmony import */ var src_app_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/components/select/select-option.service */ 22853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class DeletedCircleModule {
}
DeletedCircleModule.ɵfac = function DeletedCircleModule_Factory(t) { return new (t || DeletedCircleModule)(); };
DeletedCircleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DeletedCircleModule });
DeletedCircleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_theme_shared_components_select_select_option_service__WEBPACK_IMPORTED_MODULE_3__.SelectOptionService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _deletedCircle_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeletedCircleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule,
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DeletedCircleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _deletedCircle_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeletedCircleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule,
        angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ngx_chips__WEBPACK_IMPORTED_MODULE_7__.TagInputModule, angular_dual_listbox__WEBPACK_IMPORTED_MODULE_8__.AngularDualListBoxModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_hospital_deletedCircle_deletedCircle_module_ts.js.map