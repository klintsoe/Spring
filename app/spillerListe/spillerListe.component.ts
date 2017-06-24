import { Component, OnInit } from '@angular/core';
import {ISpiller} from './spillerData';
import {SpillerListeService} from './spillerListe.service';
//import {Name} from './name';

@Component({
    selector: 'spillerListe',
    moduleId : module.id,
    templateUrl : 'spillerListe.component.html',  
    styleUrls : ['spillerListe.component.css'] ,
    providers : [SpillerListeService]
})
export class SpillerListe implements OnInit {

spillerList : ISpiller[] = null;
errorMessage : string ; 
nameClick(clickedId : number) : void {
  this.spillerList[clickedId].navn = this.spillerList[clickedId].navn + "cl "; 
}

showListe() : boolean {
  // console.log("showListe lenght:" + this.spillerList.length );
  // console.log("showListe not null:" + (this.spillerList != null));
  
  return this.spillerList != null && this.spillerList.length > 0;
}

    ngOnInit(): void {
      this._spillerListService.getSpillerList()
      .subscribe(liste => this.spillerList = liste,
                 error => this.errorMessage = <any>error);
      

    }

constructor(private _spillerListService : SpillerListeService) {};
 }