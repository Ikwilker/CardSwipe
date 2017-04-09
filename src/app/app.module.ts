import { BrowserModule } from '@angular/platform-browser';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
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
    Page1,
    Page2,
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
    Page1,
    Page2,
    AccountPage,
    SetsPage,
    AboutPage,
    LoginPage,
    ResetPasswordPage
  ],
  providers: GetProviders()
})
export class AppModule {}
