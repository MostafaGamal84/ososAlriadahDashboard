"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_authentication_auth-signup-v2_auth-signup-v2_module_ts"],{

/***/ 38653:
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup-v2/auth-signup-v2-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupV2RoutingModule": () => (/* binding */ AuthSignupV2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_signup_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-signup-v2.component */ 23885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _auth_signup_v2_component__WEBPACK_IMPORTED_MODULE_0__.AuthSignupV2Component
    }
];
class AuthSignupV2RoutingModule {
}
AuthSignupV2RoutingModule.ɵfac = function AuthSignupV2RoutingModule_Factory(t) { return new (t || AuthSignupV2RoutingModule)(); };
AuthSignupV2RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthSignupV2RoutingModule });
AuthSignupV2RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthSignupV2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23885:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup-v2/auth-signup-v2.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupV2Component": () => (/* binding */ AuthSignupV2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_demo_Services_baseService_base_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/Services/baseService/base-service.service */ 90202);
/* harmony import */ var src_app_demo_helpers_apiPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/_helpers/apiPath */ 89778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_demo_Services_AccountController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/Services/AccountController.service */ 37647);
/* harmony import */ var _Services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/http/http.service */ 58281);
/* harmony import */ var src_app_demo_Services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/Services/account/account.service */ 30706);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-select */ 69774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);












function AuthSignupV2Component_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u062E\u064A\u0631 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0633\u0646 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0627\u062C\u0632\u0627\u0621 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0647 \u0645\u0637\u0644\u0648\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0628\u062F\u064A\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0627\u064A\u0627\u0645 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0628\u0644\u062F \u0627\u0644\u0627\u0642\u0627\u0645\u0629 \u0645\u0637\u0644\u0648\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_optgroup_50_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ch_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ch_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](" \u0627\u0644\u0628\u0627\u0642\u0647 " + ch_r15.name + " " + "(" + "\u0639\u062F\u062F \u0627\u0644\u0633\u0627\u0639\u0627\u062A :" + ch_r15.totalHours + ")");
} }
function AuthSignupV2Component_optgroup_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "optgroup", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthSignupV2Component_optgroup_50_option_1_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", row_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", row_r13.subscribes);
} }
function AuthSignupV2Component_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ng-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r10.Governorates);
} }
function AuthSignupV2Component_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u064A\u062C\u0628 \u0627\u0646 \u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 6 \u062D\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_54_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u064A\u062C\u0628 \u0627\u0646 \u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 40 \u062D\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthSignupV2Component_div_54_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AuthSignupV2Component_div_54_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AuthSignupV2Component_div_54_div_3_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.f.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.f.password.errors.maxlength);
} }
function AuthSignupV2Component_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u062A\u0627\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AuthSignupV2Component_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthSignupV2Component_div_57_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AuthSignupV2Component_div_57_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.f.confirmPassword.errors.matching);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/auth/signin-v2"]; };
class AuthSignupV2Component {
    constructor(formBuilder, toastr, AccountService, httpSv, account) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.AccountService = AccountService;
        this.httpSv = httpSv;
        this.account = account;
        this.NationalityService = new src_app_demo_Services_baseService_base_service_service__WEBPACK_IMPORTED_MODULE_0__.BaseService(httpSv, src_app_demo_helpers_apiPath__WEBPACK_IMPORTED_MODULE_1__.ApiPath.Nationality);
        this.subscribeService = new src_app_demo_Services_baseService_base_service_service__WEBPACK_IMPORTED_MODULE_0__.BaseService(httpSv, src_app_demo_helpers_apiPath__WEBPACK_IMPORTED_MODULE_1__.ApiPath.SubscribeType);
        this.GovernorateService = new src_app_demo_Services_baseService_base_service_service__WEBPACK_IMPORTED_MODULE_0__.BaseService(httpSv, src_app_demo_helpers_apiPath__WEBPACK_IMPORTED_MODULE_1__.ApiPath.Governorate);
        this.TimeService = new src_app_demo_Services_baseService_base_service_service__WEBPACK_IMPORTED_MODULE_0__.BaseService(httpSv, src_app_demo_helpers_apiPath__WEBPACK_IMPORTED_MODULE_1__.ApiPath.Time);
    }
    ngOnInit() {
        this.NationalityService.GetAll().subscribe((res) => {
            const data = res.map((x) => {
                const temp = {
                    label: x.name,
                    value: x.id.toString()
                };
                return temp;
            });
            this.Nationalities = data;
            console.log(this.Nationalities);
        });
        this.subscribeService.GetAll().subscribe(res => {
            this.Subscribes = res;
        });
        this.GovernorateService.GetAll().subscribe((res) => {
            const data = res.map((x) => {
                const temp = {
                    label: x.name_ar,
                    value: x.id.toString()
                };
                return temp;
            });
            this.Governorates = data;
            console.log(this.Governorates);
        });
        this.TimeService.GetAll().subscribe((res) => {
            const data = res.map((x) => {
                const temp = {
                    label: x.dayName,
                    value: x.id.toString()
                };
                return temp;
            });
            this.Times = data;
            console.log(this.Times);
        });
        this.initForm();
    }
    initForm() {
        this.RegisterForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            insteadMobileNumber: [],
            nationalityId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            subscribeId: [],
            governorateId: [],
            savedParts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(40)],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            studentTimes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    get f() {
        return this.RegisterForm.controls;
    }
    onFormSubmit() {
        var _a, _b;
        let data = this.RegisterForm.value;
        console.log(data);
        data.studentTimes = [];
        (_b = (_a = this.RegisterForm.controls) === null || _a === void 0 ? void 0 : _a.studentTimes) === null || _b === void 0 ? void 0 : _b.value.forEach((e) => {
            let up = {
                id: 0,
                timeId: e,
                studentId: 0,
                isDeleted: false
            };
            data.studentTimes.push(up);
        });
        this.AccountService.Add(data).subscribe((res) => {
            this.toastr.success("تم التسجيل بنجاح");
            this.account.setCurrentUser(res);
            this.account.getCurrentUser();
        }, error => {
            this.toastr.error("يرجي التحقق من جودة الاتصال بالانترنت");
        });
    }
}
AuthSignupV2Component.ɵfac = function AuthSignupV2Component_Factory(t) { return new (t || AuthSignupV2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_Services_AccountController_service__WEBPACK_IMPORTED_MODULE_2__.AccountControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_Services_account_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService)); };
AuthSignupV2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AuthSignupV2Component, selectors: [["app-auth-signup-v2"]], decls: 68, vars: 55, consts: [[1, "auth-wrapper", "align-items-stretch", "aut-bg-img"], ["width", "60%", "direction", "right"], ["autoplay", "", "loop", ""], ["src", "../../../../../assets/\u064A\u0627 \u062D\u0627\u0645\u0644 \u0627\u0644\u0642\u0631\u0622\u0646 - \u0623\u062D\u0645\u062F \u0627\u0644\u0647\u0627\u062C\u0631\u064A - Ya Hamel Al Quran.mp4", "type", "video/mp4"], [1, "flex-grow-1"], [1, "auth-side-form"], [1, "auth-content"], [3, "formGroup", "ngSubmit"], ["direction", "right", 1, "mobile"], ["src", "../../../../../assets/Logo.png", "alt", "", 1, "img-fluid", "mb-4"], [2, "text-align", "center", "font-family", "Nahdi"], [1, "input-group", "mb-3"], ["type", "text", "formControlName", "firstName", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u062E\u064A\u0631", 1, "form-control", 3, "ngClass"], ["type", "email", "formControlName", "email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "age", "placeholder", "\u0627\u0644\u0633\u0646", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "savedParts", "placeholder", "\u0627\u0644\u0627\u062C\u0632\u0627\u0621 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "mobileNumber", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "insteadMobileNumber", "placeholder", "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u062F\u064A\u0644", 1, "form-control", 3, "ngClass"], [1, "col-sm-6"], [1, "form-group"], ["formControlName", "studentTimes", 3, "ngClass", "options", "multiple"], ["formControlName", "nationalityId", 3, "ngClass", "options"], ["formControlName", "subscribeId", 1, "form-select", "w-100", 2, "border-radius", "13px", "height", "37px", "border-color", "#dddddd"], ["style", "text-align: center;", 3, "label", 4, "ngFor", "ngForOf"], ["class", "col-sm-6", 4, "ngIf"], [1, "input-group", "mb-4"], ["type", "text", "formControlName", "password", "placeholder", "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "confirmPassword", "placeholder", "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 ", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-4", 3, "disabled"], [1, "text-center"], [1, "saprator", "my-4"], [1, "mt-4"], [1, "f-w-400", 3, "routerLink"], [1, "invalid-feedback"], [2, "text-align", "center", 3, "label"], ["style", "text-align: right;", 3, "value", 4, "ngFor", "ngForOf"], [2, "text-align", "right", 3, "value"], ["formControlName", "governorateId", 3, "ngClass", "options"], [4, "ngIf"]], template: function AuthSignupV2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "marquee", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u0645\u062F\u0631\u0633\u0629 \u0627\u062C\u064A\u0627\u0644 \u0627\u0644\u0642\u0631\u0627\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AuthSignupV2Component_Template_form_ngSubmit_8_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "marquee", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " \u0645\u062F\u0631\u0633\u0629 \u0627\u062C\u064A\u0627\u0644 \u0627\u0644\u0642\u0631\u0627\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u062A\u0633\u062C\u064A\u0644 \u0637\u0627\u0644\u0628 \u062C\u062F\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AuthSignupV2Component_div_16_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AuthSignupV2Component_div_19_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AuthSignupV2Component_div_22_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AuthSignupV2Component_div_25_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AuthSignupV2Component_div_28_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AuthSignupV2Component_div_31_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AuthSignupV2Component_div_34_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\u0627\u0644\u0627\u064A\u0627\u0645 \u0627\u0644\u0645\u062A\u0627\u062D\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AuthSignupV2Component_div_40_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\u0628\u0644\u062F \u0627\u0644\u0627\u0642\u0627\u0645\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AuthSignupV2Component_div_46_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "\u0627\u0644\u0628\u0627\u0642\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AuthSignupV2Component_optgroup_50_Template, 2, 2, "optgroup", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, AuthSignupV2Component_div_51_Template, 5, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, AuthSignupV2Component_div_54_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, AuthSignupV2Component_div_57_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u062A\u0633\u062C\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "\u0627\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\u0647\u0644 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644 \u061F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_25_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.RegisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c0, ctx.f.firstName.errors && ctx.f.firstName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors && ctx.f.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, ctx.f.lastName.errors && ctx.f.lastName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors && ctx.f.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c0, ctx.f.email.errors && ctx.f.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.email.errors && ctx.f.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](38, _c0, ctx.f.age.errors && ctx.f.age.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.age.errors && ctx.f.age.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](40, _c0, ctx.f.savedParts.errors && ctx.f.savedParts.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.savedParts.errors && ctx.f.savedParts.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](42, _c0, ctx.f.mobileNumber.errors && ctx.f.mobileNumber.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.mobileNumber.errors && ctx.f.mobileNumber.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](44, _c0, ctx.f.insteadMobileNumber.errors && ctx.f.insteadMobileNumber.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.insteadMobileNumber.errors && ctx.f.insteadMobileNumber.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c0, ctx.f.studentTimes.errors && ctx.f.studentTimes.touched))("ngClass", "ng-select")("options", ctx.Times)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.studentTimes.errors && ctx.f.studentTimes.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c0, ctx.f.nationalityId.errors && ctx.f.nationalityId.touched))("ngClass", "ng-select")("options", ctx.Nationalities);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.nationalityId.errors && ctx.f.nationalityId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Subscribes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.RegisterForm.get("nationalityId")) == null ? null : tmp_25_0.value) == 10 ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](50, _c0, ctx.f.password.errors && ctx.f.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.password.errors && ctx.f.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](52, _c0, ctx.f.confirmPassword.errors && ctx.f.confirmPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.errors && ctx.f.confirmPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.RegisterForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, ng_select__WEBPACK_IMPORTED_MODULE_9__.SelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["video[_ngcontent-%COMP%] {\n  position: fixed !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  min-width: 100% !important;\n  min-height: 100% !important;\n  display: none;\n}\n\nmarquee[_ngcontent-%COMP%] {\n  height: 6%;\n  width: 100%;\n  color: black;\n  background-color: burlywood;\n  display: flex;\n  font-size: 144%;\n  align-items: center;\n  position: fixed;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  height: 6%;\n  width: 270px;\n  color: black;\n  background-color: burlywood;\n  display: none;\n  font-size: 144%;\n  align-items: center;\n  position: fixed;\n}\n\n@media screen and (max-width: 992px) {\n  .mobile[_ngcontent-%COMP%] {\n    height: 6%;\n    width: 270px;\n    color: black;\n    background-color: burlywood;\n    display: flex;\n    font-size: 144%;\n    align-items: center;\n    position: fixed;\n    margin-top: -57px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtc2lnbnVwLXYyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBdENGOztBQXdDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFyQ0Y7O0FBdUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXBDRjs7QUFzQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQW5DRjtBQUNGIiwiZmlsZSI6ImF1dGgtc2lnbnVwLXYyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIDo6bmctZGVlcC5tYXQtc2VsZWN0LW1pbi1saW5le1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBOYWhkaTtcclxuLy8gfVxyXG4vLyAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICB9XHJcblxyXG4vLyA6Om5nLWRlZXAubWF0LW9wdGlvbi10ZXh0IHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgZmxleC1ncm93OiAxO1xyXG4vLyAgIGNvbG9yOiAjMjEyNTI5O1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgZm9udC1mYW1pbHk6IE5haGRpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOmhvc3QgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgd2lkdGg6IDIzNXB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2RhYjg5ZTtcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyAgIGhlaWdodDogNDZweDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBOYWhkaTtcclxuLy8gICBjb2xvcjogZGFya3JlZDtcclxuLy8gICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyBsYWJlbHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcbi8vIC5tYXQtb3B0aW9uLXRleHQge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG52aWRlb3tcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICByaWdodDogMCFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiAwIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubWFycXVlZXtcclxuICBoZWlnaHQ6IDYlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE0NCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLm1vYmlsZSB7XHJcbiAgaGVpZ2h0OiA2JTtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTQ0JTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tb2JpbGUge1xyXG4gICAgaGVpZ2h0OiA2JTtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE0NCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTU3cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 41502:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup-v2/auth-signup-v2.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupV2Module": () => (/* binding */ AuthSignupV2Module)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auth_signup_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-signup-v2-routing.module */ 38653);
/* harmony import */ var _auth_signup_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-signup-v2.component */ 23885);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-select */ 69774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class AuthSignupV2Module {
}
AuthSignupV2Module.ɵfac = function AuthSignupV2Module_Factory(t) { return new (t || AuthSignupV2Module)(); };
AuthSignupV2Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthSignupV2Module });
AuthSignupV2Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_signup_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthSignupV2RoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ng_select__WEBPACK_IMPORTED_MODULE_6__.SelectModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthSignupV2Module, { declarations: [_auth_signup_v2_component__WEBPACK_IMPORTED_MODULE_1__.AuthSignupV2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_signup_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthSignupV2RoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ng_select__WEBPACK_IMPORTED_MODULE_6__.SelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_auth-signup-v2_auth-signup-v2_module_ts.js.map