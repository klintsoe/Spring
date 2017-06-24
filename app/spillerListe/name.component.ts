import { Component, OnChanges, Input } from '@angular/core';
import {ISpiller} from './spillerData';

@Component({
    selector: 'playName',
    moduleId : module.id,
    templateUrl : 'name.component.html' //, 
    //styleUrls : ['celleData.component.css']
})

export class Name implements OnChanges {
@Input() spillerData : ISpiller; 

playerName : string;
id : number;

onclickking() : void {
  alert('hej med dig : ' + this.playerName);
    console.log('clikking...');
}

ngOnChanges() : void {
    this.playerName = this.spillerData.navn;
    this.id = this.spillerData.id;
}



}
