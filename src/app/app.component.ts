import { Component, ViewChild } from '@angular/core';
import { NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { AccountPage } from '../pages/account/account';
import { SetsPage } from '../pages/sets/sets';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AuthData } from '../providers/auth-data';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  zone: NgZone;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: Splashscreen) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Create', component: CreatePage },
      { title: 'Account', component: AccountPage },
      { title: 'Sets', component: SetsPage },
      { title: 'About', component: AboutPage },
      { title: 'Login', component: LoginPage },
      { title: 'Reset Password', component: ResetPasswordPage }
    ];

    this.zone = new NgZone({});
    firebase.initializeApp({
    apiKey: "AIzaSyC6-Em8EmnIZ5vg00yfVg5h2IuTltCknls",
    authDomain: "cardapp-649f1.firebaseapp.com",
    databaseURL: "https://cardapp-649f1.firebaseio.com",
    projectId: "cardapp-649f1",
    storageBucket: "cardapp-649f1.appspot.com",
    messagingSenderId: "965688924466"

  });

  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }




  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
