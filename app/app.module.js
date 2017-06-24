"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var spillerListe_module_1 = require("./spillerListe/spillerListe.module");
var app_component_1 = require("./app.component");
var tabletest_component_1 = require("./tabletest.component");
var startText_component_1 = require("./table/startText.component");
var welcome_component_1 = require("./home/welcome.component");
var hiddenPage_component_1 = require("./hiddenPage/hiddenPage.component");
var loginPage_component_1 = require("./hiddenPage/loginPage.component");
var loginGuardianAngel_service_1 = require("./hiddenPage/loginGuardianAngel.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'login/:displayError', component: loginPage_component_1.LoginPage },
                { path: 'login', component: loginPage_component_1.LoginPage },
                { path: 'hiddenPage', canActivate: [loginGuardianAngel_service_1.LoginGuardianAngel], component: hiddenPage_component_1.HiddenPage },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            spillerListe_module_1.SpillerListeModule],
        declarations: [app_component_1.AppComponent, tabletest_component_1.TableTestComponent, startText_component_1.StartText, hiddenPage_component_1.HiddenPage,
            welcome_component_1.WelcomeComponent, loginPage_component_1.LoginPage],
        providers: [loginGuardianAngel_service_1.LoginGuardianAngel],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map