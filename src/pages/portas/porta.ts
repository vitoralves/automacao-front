import { PortaService } from './porta.service';
import { PrincipalPage } from './../principal/principal';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-porta',
  templateUrl: 'porta.html',
  providers: [PortaService]
})
export class PortaPage {

  constructor(private nav: NavController, public service: PortaService) {
  }

  voltar(){
    this.nav.setRoot(PrincipalPage);
  }

  acionarGaragem(){
    this.service.acionarGaragem();
  }
}
