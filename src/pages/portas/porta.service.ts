import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PortaService {
    
    constructor(private http: Http) { }

    acionarGaragem(){
        return this.http.get('http://192.168.1.199/rele/garagem/porta').map(res => res.text()).toPromise();
    }
}