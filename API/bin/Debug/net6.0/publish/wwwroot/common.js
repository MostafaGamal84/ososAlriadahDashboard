"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["common"],{

/***/ 12875:
/*!**********************************************************************!*\
  !*** ./src/app/demo/Services/studentReport/studentReport.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentReportService": () => (/* binding */ StudentReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 58281);


class StudentReportService {
    constructor(httpservice) {
        this.httpservice = httpservice;
        this.controller = 'StudentReport/';
    }
    GetAll() {
        return this.httpservice.httpGet(this.controller);
    }
    GetByUserId() {
        return this.httpservice.httpGet(this.controller + 'GetByUserId');
    }
    GetById(id) {
        return this.httpservice.httpGet(this.controller + 'id/' + id);
    }
    GetByStudentId(id) {
        return this.httpservice.httpGet(this.controller + 'GetByStudentId/' + id);
    }
    Add(model) {
        return this.httpservice.httpPost(this.controller + 'add/', model);
    }
    Update(model) {
        return this.httpservice.HttpPost(this.controller + 'update/', model);
    }
    Delete(id) {
        return this.httpservice.httpDelete(this.controller + id);
    }
}
StudentReportService.ɵfac = function StudentReportService_Factory(t) { return new (t || StudentReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
StudentReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StudentReportService, factory: StudentReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99708:
/*!********************************************************************!*\
  !*** ./src/app/demo/Services/teacherHours/teacherHours.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherHoursService": () => (/* binding */ TeacherHoursService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_demo_Services_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/Services/http/http.service */ 58281);


class TeacherHoursService {
    constructor(httpservice) {
        this.httpservice = httpservice;
        this.controller = 'TeacherHours/';
    }
    GetAll() {
        return this.httpservice.httpGet(this.controller + 'GetAll');
    }
    GetAllByTeacherId() {
        return this.httpservice.httpGet(this.controller + 'GetAllByTeacherId');
    }
    GetById(id) {
        return this.httpservice.httpGet(this.controller + 'id/' + id);
    }
    GetTotalSummeryByTeacherId(id) {
        return this.httpservice.httpGet(this.controller + 'getTotalSummeryByTeacherId/' + id);
    }
    IncomingAndOutgoing() {
        return this.httpservice.httpGet(this.controller + 'IncomingAndOutgoing/');
    }
    GetTotalByTeacherId(id) {
        return this.httpservice.httpGet(this.controller + 'getTotalByTeacherId/' + id);
    }
    Add(model) {
        return this.httpservice.httpPost(this.controller + 'add/', model);
    }
    Update(model) {
        return this.httpservice.HttpPost(this.controller + 'update/', model);
    }
    Delete(id) {
        return this.httpservice.httpDelete(this.controller + id);
    }
}
TeacherHoursService.ɵfac = function TeacherHoursService_Factory(t) { return new (t || TeacherHoursService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_demo_Services_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
TeacherHoursService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeacherHoursService, factory: TeacherHoursService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map