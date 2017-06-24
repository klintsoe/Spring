import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
//import {RouterModule} from '@angular/router';

import {SpillerListeRouteModule} from './spillerListeRoute.module';

import {SpillerListe} from './spillerListe.component';
import {Match} from './celleData.component';
import {Name} from './name.component';



@NgModule({
  imports: [ CommonModule,
             HttpModule,
             SpillerListeRouteModule
            //  RouterModule.forChild([
            //    {path : 'spillerListe', component : SpillerListe},
            //  ]) 
 ],
  declarations: [ SpillerListe, Match, Name ],
  providers: [],
})
export class SpillerListeModule { }
