import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {SpillerListeModule} from './spillerListe/spillerListe.module';


import { AppComponent }  from './app.component';
import {TableTestComponent} from './tabletest.component';
import {StartText} from './table/startText.component';
import {WelcomeComponent} from './home/welcome.component';
import {HiddenPage} from './hiddenPage/hiddenPage.component';
import {LoginPage} from './hiddenPage/loginPage.component';
import {LoginGuardianAngel} from './hiddenPage/loginGuardianAngel.service';



@NgModule({
  imports: [ BrowserModule,
             HttpModule, 
             RouterModule.forRoot([
               {path : 'welcome', component : WelcomeComponent},
               {path : 'login/:displayError', component : LoginPage},
               {path : 'login', component : LoginPage},
               {path : 'hiddenPage', canActivate: [LoginGuardianAngel], component : HiddenPage},
               
               {path : '' , redirectTo : 'welcome', pathMatch: 'full' },
               {path : '**', redirectTo : 'welcome', pathMatch: 'full' } 

             ]),
             SpillerListeModule ],
  declarations: [ AppComponent, TableTestComponent, StartText, HiddenPage, 
                        WelcomeComponent, LoginPage ],
  providers: [LoginGuardianAngel],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
