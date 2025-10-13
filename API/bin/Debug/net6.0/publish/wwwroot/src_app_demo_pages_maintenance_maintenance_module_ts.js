"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_maintenance_maintenance_module_ts"],{

/***/ 56570:
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceRoutingModule": () => (/* binding */ MaintenanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'offline-ui',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_maintenance_mainten-offline-ui_mainten-offline-ui_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mainten-offline-ui/mainten-offline-ui.module */ 1344)).then((module) => module.MaintenOfflineUiModule)
            },
            {
                path: 'coming-soon',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_maintenance_mainten-coming-soon_mainten-coming-soon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mainten-coming-soon/mainten-coming-soon.module */ 38023)).then((module) => module.MaintenComingSoonModule)
            },
            {
                path: 'error',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_maintenance_mainten-error_mainten-error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mainten-error/mainten-error.module */ 33618)).then((module) => module.MaintenErrorModule)
            }
        ]
    }
];
class MaintenanceRoutingModule {
}
MaintenanceRoutingModule.ɵfac = function MaintenanceRoutingModule_Factory(t) { return new (t || MaintenanceRoutingModule)(); };
MaintenanceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaintenanceRoutingModule });
MaintenanceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaintenanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 30682:
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceModule": () => (/* binding */ MaintenanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance-routing.module */ 56570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MaintenanceModule {
}
MaintenanceModule.ɵfac = function MaintenanceModule_Factory(t) { return new (t || MaintenanceModule)(); };
MaintenanceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaintenanceModule });
MaintenanceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaintenanceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_maintenance_maintenance_module_ts.js.map