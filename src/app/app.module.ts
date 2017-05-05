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
<<<<<<< HEAD
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireModule } from 'angularfire2';
import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { EventData } from '../providers/event-data';

import  firebase from 'firebase';
||||||| merged common ancestors
import { AngularFireModule } from 'angularfire2';
import { AuthData } from '../providers/auth-data';
import  firebase from 'firebase';
=======
import { ProfilePage } from '../pages/profile/profile';

>>>>>>> 66995aacf8839b371d5d8af0f79d9cc6480544b0
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    SetsPage,
    LoginPage,
<<<<<<< HEAD
    ResetPasswordPage,
    ProfilePage
||||||| merged common ancestors
    ResetPasswordPage
=======
    AccountPage,
    ProfilePage,
    ResetPasswordPage,
    AboutPage
>>>>>>> 66995aacf8839b371d5d8af0f79d9cc6480544b0
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
    SetsPage,
    LoginPage,
<<<<<<< HEAD
    ResetPasswordPage,
    ProfilePage
||||||| merged common ancestors
    ResetPasswordPage
=======
    AccountPage,
    ProfilePage,
    ResetPasswordPage,
    AboutPage

>>>>>>> 66995aacf8839b371d5d8af0f79d9cc6480544b0
  ],
  providers: GetProviders()
})
export class AppModule {}
