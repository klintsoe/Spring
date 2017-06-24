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
var LoginGuardianAngel = (function () {
    function LoginGuardianAngel(_route) {
        this._route = _route;
        this.isLoggedIn = false;
    }
    LoginGuardianAngel.prototype.setloginState = function (loginState) {
        this.isLoggedIn = loginState;
        console.log("isLoggedIn:" + this.isLoggedIn);
    };
    LoginGuardianAngel.prototype.canActivate = function (route) {
        console.log("CanMan: isLoggedIn:" + this.isLoggedIn);
        if (!this.isLoggedIn) {
            alert("You are not logged in");
            this._route.navigate(['/login', true]);
            return false;
        }
        return true;
    };
    return LoginGuardianAngel;
}());
LoginGuardianAngel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], LoginGuardianAngel);
exports.LoginGuardianAngel = LoginGuardianAngel;
//# sourceMappingURL=loginGuardianAngel.service.js.map