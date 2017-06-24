import { Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginGuardianAngel} from './loginGuardianAngel.service';

@Component({
    moduleId : module.id,
    templateUrl : 'loginPage.component.html', 
})

export class LoginPage implements OnChanges, OnInit {

errorMode : boolean = false;

    constructor(private _route : ActivatedRoute,
        private _loginGuardian : LoginGuardianAngel) {

    }

showError() : boolean {
    return this.errorMode;
}

login() : void {
  this._loginGuardian.setloginState(true); 
  alert("You er now logged in");
}

logout() : void {
  this._loginGuardian.setloginState(false); 
  alert("You er now logged out");
}

ngOnChanges() : void {
    console.log('LoginPage:onchange Called: before: '+ this.errorMode);
  let show : boolean =  this._route.snapshot.params['displayError'];
  if(show != null) {
      this.errorMode = show;
  }
  else {
      this.errorMode = false;
  }
     console.log('LoginPage: onchange Called: after: '+ this.errorMode);
 
}


ngOnInit() : void {
    console.log('LoginPage:onInit Called: before: '+ this.errorMode);
  let show : boolean =  this._route.snapshot.params['displayError'];
  if(show != null) {
      this.errorMode = show;
  }
  else {
      this.errorMode = false;
  }
     console.log('LoginPage: onInit Called: after: '+ this.errorMode);
 
}


}
