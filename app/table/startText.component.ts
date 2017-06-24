import { Component } from '@angular/core';

@Component({
    selector: 'startText',
    templateUrl : 'app/table/startText.html'  
})
export class StartText {
    headline : string = "Velkommen";
    subtext : string = "godt at du kunne komme";
    nextString : string = "<h1>The next String... </h1> uuhhuuu...."; 
    display : boolean = false;

getNextString(): string {
    return "<h1>The next String... </h1> uuhhuuu...."
}


 }
