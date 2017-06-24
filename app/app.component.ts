import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <a class='navbar-brand'>{{startText}}</a>
                    <li><a [routerLink] = "['/welcome']">welcome</a></li>
                    <li><a [routerLink] = "['/spillerListe']">SpillerListe</a></li>
                    <li><a [routerLink] = "['/hiddenPage']">HiddenPage</a></li>
                    <li><a [routerLink] = "['/login']">LoginPage</a></li>
            
                </ul>
            </div>
        </nav>
                  
        <div class='container'>
           <router-outlet></router-outlet>
        </div>
    </div>
    `


})
export class AppComponent {
    startText : String = "min startText";


 }
