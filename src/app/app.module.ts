import { BrowserModule } from '@angular/platform-browser';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { AccountPage} from '../pages/account/account';
import { SetsPage } from '../pages/sets/sets';
import { AboutPage } from '../pages/about/about';
import { GetProviders } from './app.providers';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AngularFireModule } from 'angularfire2';
import { AuthData } from '../providers/auth-data';
import  firebase from 'firebase';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    AccountPage,
    SetsPage,
    AboutPage,
    LoginPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    AccountPage,
    SetsPage,
    AboutPage,
    LoginPage,
    ResetPasswordPage
  ],
  providers: GetProviders()
})
export class AppModule {}
