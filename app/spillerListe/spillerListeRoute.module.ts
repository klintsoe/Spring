import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {SpillerListe} from './spillerListe.component';

@NgModule({
  imports: [ RouterModule.forChild([
               {path : 'spillerListe', component : SpillerListe}
             ]) ],
  exports : [RouterModule]
})
export class SpillerListeRouteModule { }
