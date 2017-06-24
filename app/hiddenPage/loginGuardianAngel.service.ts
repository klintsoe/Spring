import {Injectable} from '@angular/core' 
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router'

@Injectable()
export class LoginGuardianAngel implements CanActivate {

private isLoggedIn : boolean = false;

constructor(private _route: Router) {

}


    setloginState(loginState : boolean) : void {
        
        this.isLoggedIn = loginState;
        console.log("isLoggedIn:" + this.isLoggedIn);
    }


canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log("CanMan: isLoggedIn:" + this.isLoggedIn);

    if(!this.isLoggedIn) {
        alert("You are not logged in");
        this._route.navigate(['/login', true]);
        return false;
    }
    
    return true;
}

} 