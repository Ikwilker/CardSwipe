import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Sets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sets',
  templateUrl: 'sets.html'
})
export class SetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetsPage');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Sorry!',
      message: 'You havent created any set yet! We havent implemented that yet!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
