import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the StatistikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statistik',
  templateUrl: 'statistik.html',
})
export class StatistikPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatistikPage');
  }

  showGender(){
      const alert = this.alertCtrl.create({
      title: 'Statistik Event',
      subTitle: 'Maaf data belum bisa ditampilkan',
      buttons: ['OK']
    });
    alert.present();
  }

  showUsia(){
  const alert = this.alertCtrl.create({
      title: 'Statistik Event',
      subTitle: 'Maaf data belum bisa ditampilkan',
      buttons: ['OK']
    });
    alert.present();
  }

  showKota(){
  const alert = this.alertCtrl.create({
      title: 'Statistik Event',
      subTitle: 'Maaf data belum bisa ditampilkan',
      buttons: ['OK']
    });
    alert.present();

  }

}
