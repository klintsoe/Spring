"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
//import {RouterModule} from '@angular/router';
var spillerListeRoute_module_1 = require("./spillerListeRoute.module");
var spillerListe_component_1 = require("./spillerListe.component");
var celleData_component_1 = require("./celleData.component");
var name_component_1 = require("./name.component");
var SpillerListeModule = (function () {
    function SpillerListeModule() {
    }
    return SpillerListeModule;
}());
SpillerListeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            http_1.HttpModule,
            spillerListeRoute_module_1.SpillerListeRouteModule
            //  RouterModule.forChild([
            //    {path : 'spillerListe', component : SpillerListe},
            //  ]) 
        ],
        declarations: [spillerListe_component_1.SpillerListe, celleData_component_1.Match, name_component_1.Name],
        providers: [],
    })
], SpillerListeModule);
exports.SpillerListeModule = SpillerListeModule;
//# sourceMappingURL=spillerListe.module.js.map