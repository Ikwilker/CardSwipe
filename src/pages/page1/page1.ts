import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

	  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
    
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Sorry!',
      message: 'Viewing all of the Genres is not implemented just yet. Stick around to see how awesome it will be when it is!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
