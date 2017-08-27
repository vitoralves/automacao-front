import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class IluminacaoService {
    
    constructor(private http: Http) { }

    releVitor(){
        return this.http.get('http://192.168.1.199/rele/iluminacao/vitor').map(res => res.text()).toPromise();
    }

    alteraRele(){
        console.log("altera rele");
        return this.http.get('http://192.168.1.199/lampada/vitor').map(res => res.text()).toPromise();
    }
}