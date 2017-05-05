import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObserveable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  cards: FirebaseListObservable<any>;
  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alrtCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) {
  this.cards = af.database.list('/cards');

  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad CreatePage');
  }
  
  addCard(){
  let prompt = this.alerCtrl.create({
    title: 'Add a note card to your set!',
    inputs: [
    {
        name: 'front',
        placeholder: 'Front of card'
    },
        name: 'back',
        placeholder: 'Back of card'
    ],
    buttons: [
    {
    text: 'Cancel',
    handler: data => {
        console.log('Cancel clicked');
    }
    },
    {
    text: 'Save',
    handler: data => {
    this.cards.push({
        front: data.front,
        back: data.back
    });
    }
    }
    ]
  });
  prompt.present();
  }
}
