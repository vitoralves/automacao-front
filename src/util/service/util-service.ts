import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    conexao: String;

    constructor(public platform: Platform) {
        
    }

    salvarConexao(c) {
        this.conexao = c;
    }

    retornaConexao() {
        return this.conexao;
    }

}