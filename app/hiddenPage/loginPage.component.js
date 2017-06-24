"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var loginGuardianAngel_service_1 = require("./loginGuardianAngel.service");
var LoginPage = (function () {
    function LoginPage(_route, _loginGuardian) {
        this._route = _route;
        this._loginGuardian = _loginGuardian;
        this.errorMode = false;
    }
    LoginPage.prototype.showError = function () {
        return this.errorMode;
    };
    LoginPage.prototype.login = function () {
        this._loginGuardian.setloginState(true);
        alert("You er now logged in");
    };
    LoginPage.prototype.logout = function () {
        this._loginGuardian.setloginState(false);
        alert("You er now logged out");
    };
    LoginPage.prototype.ngOnChanges = function () {
        console.log('LoginPage:onchange Called: before: ' + this.errorMode);
        var show = this._route.snapshot.params['displayError'];
        if (show != null) {
            this.errorMode = show;
        }
        else {
            this.errorMode = false;
        }
        console.log('LoginPage: onchange Called: after: ' + this.errorMode);
    };
    LoginPage.prototype.ngOnInit = function () {
        console.log('LoginPage:onInit Called: before: ' + this.errorMode);
        var show = this._route.snapshot.params['displayError'];
        if (show != null) {
            this.errorMode = show;
        }
        else {
            this.errorMode = false;
        }
        console.log('LoginPage: onInit Called: after: ' + this.errorMode);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'loginPage.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        loginGuardianAngel_service_1.LoginGuardianAngel])
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=loginPage.component.js.map