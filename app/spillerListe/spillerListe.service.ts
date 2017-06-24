import { Injectable } from '@angular/core';

import {ISpiller} from './spillerData';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SpillerListeService {
    private _skakUrl = 'api/skak/ovreGruppe.json';

    constructor(private _http : Http) {};

    getSpillerList() : Observable<ISpiller[]> {
        return this._http.get(this._skakUrl).
        map((response : Response) => <ISpiller[]> response.json())
        .do(data => console.log('All :' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error : Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}