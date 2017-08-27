import { Network } from '@ionic-native/network';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Network]
})
export class HomePage{

  estado: String = "";
  loader: boolean = true;
  style: String;

  constructor(public navCtrl: NavController, private network: Network) {
    if (this.network.type === 'wifi') {
      this.estado = 'CONECTADO!';
      this.loader = false;
      this.style = 'margin-top: 0px;'
      setTimeout(() => {
        this.navCtrl.setRoot(PrincipalPage);
      }, 2000);
    } else {
      this.estado = 'IDENTIFICANDO REDE...';
    }
    let connectSubscription;
    connectSubscription = this.network.onConnect().subscribe(() => {
        this.navCtrl.setRoot(PrincipalPage);
    });
      
  }


  retornaClass() {
    if (this.loader) {
      return 'div-img-loading-margin';
    } else {
      return 'div-img-loading';
    }
  }



}
