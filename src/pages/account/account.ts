import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Sorry!',
      message: 'You can not create an account just yet but we are working on this as you read this!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
