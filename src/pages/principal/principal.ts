import { PortaPage } from './../portas/porta';
import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { IluminacaoPage } from '../iluminacao/iluminacao';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, private alert: AlertController, private platform: Platform) {

  }

  navegar(pagina) {
    if (pagina == 'i') {
      this.navCtrl.setRoot(IluminacaoPage);
    } else if (pagina == 'p') {
      this.navCtrl.setRoot(PortaPage);
    }
  }

  sair() {
    let a = this.alert.create({
      title: 'Logoff',
      message: 'Deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    a.present();
  }
}
