"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule,
            HttpModule,
            RouterModule.forRoot([
                { path: 'spillerListe', component: SpillerListe },
                { path: 'welcome', component: WelcomeComponent },
                { path: 'login/:displayError', component: LoginPage },
                { path: 'login', component: LoginPage },
                { path: 'hiddenPage', canActivate: [LoginGuardianAngel], component: HiddenPage },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])],
        declarations: [AppComponent, TableTestComponent, StartText, HiddenPage,
            SpillerListe, Match, Name, WelcomeComponent, LoginPage],
        providers: [LoginGuardianAngel],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=spilleListe,module.js.map