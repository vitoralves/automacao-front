import { IluminacaoService } from './iluminacao.service';
import { PrincipalPage } from './../principal/principal';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-iluminacao',
  templateUrl: 'iluminacao.html',
  providers: [IluminacaoService]
})
export class IluminacaoPage {

  lVitor: boolean = false;
  quantidade: number = 0;

  constructor(private nav: NavController, private service: IluminacaoService) {
    this.service.releVitor().then(data => {
      if (data.toString() === 'true') {
        this.lVitor = true;
        this.quantidade++;
      }
    })
  }

  voltar() {
    this.nav.setRoot(PrincipalPage);
  }

  alteraRele() {
    if (this.quantidade === 1) {
      this.quantidade++;
    } else {
      this.service.alteraRele().then(data => {
        console.log(data);
      });
    }
  }
}
