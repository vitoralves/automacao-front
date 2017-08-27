import { PortaPage } from './../pages/portas/porta';
import { IluminacaoPage } from './../pages/iluminacao/iluminacao';
import { PrincipalPage } from './../pages/principal/principal';
import { UtilService } from './../util/service/util-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loader } from '../util/loader/loader';
import { Success } from '../util/success-alert/success';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loader,
    Success,
    PrincipalPage,
    IluminacaoPage,
    PortaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Loader,
    Success,
    PrincipalPage,
    IluminacaoPage,
    PortaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilService
  ]
})
export class AppModule {}
