// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
//
// /*
//   Generated class for the Account page.
//
//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.
// */
// @Component({
//   selector: 'page-account',
//   templateUrl: 'account.html'
// })
// export class AccountPage {
//
//   constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {}
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad AccountPage');
//   }
//
//   doAlert() {
//     let alert = this.alerCtrl.create({
//       title: 'Sorry!',
//       message: 'You can not create an account just yet but we are working on this as you read this!',
//       buttons: ['Ok']
//     });
//     alert.present()
//   }
//
// }


import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class AccountPage {
  public signupForm;
  loading: any;


  constructor(public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

  /**
   * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
   *  component while the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */
  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.nav.setRoot(HomePage);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}
