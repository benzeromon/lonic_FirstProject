import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Input } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, Alert, Searchbar, } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputPage } from "../pages/input/input";
import { SearchbarPage } from "../pages/searchbar/searchbar";
import { AlertPage } from '../pages/alert/alert';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertPage,
    InputPage,
    SearchbarPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertPage,
    InputPage,
    SearchbarPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
