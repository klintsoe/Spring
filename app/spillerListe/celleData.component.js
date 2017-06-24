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
var Match = (function () {
    function Match() {
        this.color = "#dddddd";
        this.kampResultat = "un";
        this.modstanderId = -1;
    }
    Match.prototype.ngOnChanges = function () {
        this.color = this.matchdata.color;
        this.kampResultat = this.matchdata.kampResultat;
        this.modstanderId = this.matchdata.modstanderId;
        if (this.matchdata.color == 'w' || this.matchdata.color == 'W') {
            this.modstanderFarve = 'smallLeft';
            this.tableColor = 'tableSmall';
        }
        else {
            this.modstanderFarve = 'smallRigth';
            this.tableColor = 'tableSmallBlack';
        }
    };
    return Match;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Match.prototype, "matchdata", void 0);
Match = __decorate([
    core_1.Component({
        selector: 'match',
        moduleId: module.id,
        templateUrl: 'celleData.component.html',
        styleUrls: ['celleData.component.css']
    })
], Match);
exports.Match = Match;
//# sourceMappingURL=celleData.component.js.map