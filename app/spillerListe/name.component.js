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
var Name = (function () {
    function Name() {
    }
    Name.prototype.onclickking = function () {
        alert('hej med dig : ' + this.playerName);
        console.log('clikking...');
    };
    Name.prototype.ngOnChanges = function () {
        this.playerName = this.spillerData.navn;
        this.id = this.spillerData.id;
    };
    return Name;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Name.prototype, "spillerData", void 0);
Name = __decorate([
    core_1.Component({
        selector: 'playName',
        moduleId: module.id,
        templateUrl: 'name.component.html' //, 
        //styleUrls : ['celleData.component.css']
    })
], Name);
exports.Name = Name;
//# sourceMappingURL=name.component.js.map