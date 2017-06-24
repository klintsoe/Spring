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
var spillerListe_service_1 = require("./spillerListe.service");
//import {Name} from './name';
var SpillerListe = (function () {
    function SpillerListe(_spillerListService) {
        this._spillerListService = _spillerListService;
        this.spillerList = null;
    }
    SpillerListe.prototype.nameClick = function (clickedId) {
        this.spillerList[clickedId].navn = this.spillerList[clickedId].navn + "cl ";
    };
    SpillerListe.prototype.showListe = function () {
        // console.log("showListe lenght:" + this.spillerList.length );
        // console.log("showListe not null:" + (this.spillerList != null));
        return this.spillerList != null && this.spillerList.length > 0;
    };
    SpillerListe.prototype.ngOnInit = function () {
        var _this = this;
        this._spillerListService.getSpillerList()
            .subscribe(function (liste) { return _this.spillerList = liste; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    return SpillerListe;
}());
SpillerListe = __decorate([
    core_1.Component({
        selector: 'spillerListe',
        moduleId: module.id,
        templateUrl: 'spillerListe.component.html',
        styleUrls: ['spillerListe.component.css'],
        providers: [spillerListe_service_1.SpillerListeService]
    }),
    __metadata("design:paramtypes", [spillerListe_service_1.SpillerListeService])
], SpillerListe);
exports.SpillerListe = SpillerListe;
//# sourceMappingURL=spillerListe.component.js.map