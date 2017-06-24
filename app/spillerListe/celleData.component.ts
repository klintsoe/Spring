import { Component, OnChanges, Input } from '@angular/core';
import {IMatch} from './matchDataI';

@Component({
    selector: 'match',
    moduleId : module.id,
    templateUrl : 'celleData.component.html' , 
    styleUrls : ['celleData.component.css']
})

export class Match implements OnChanges {
@Input() matchdata : IMatch; 
color : string = "#dddddd";
kampResultat : string = "un";
modstanderId : number = -1;

tableColor : string;

modstanderFarve : string;

ngOnChanges() : void {
    this.color = this.matchdata.color;
    this.kampResultat = this.matchdata.kampResultat;
    this.modstanderId = this.matchdata.modstanderId;
    if(this.matchdata.color == 'w' || this.matchdata.color == 'W') {
       this.modstanderFarve = 'smallLeft';
       this.tableColor = 'tableSmall';    
    } else {
       this.modstanderFarve = 'smallRigth';
       this.tableColor = 'tableSmallBlack';    

    }

}



}
