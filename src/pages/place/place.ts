import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AgmCoreModule, AgmMap } from '@agm/core';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
  styles: [`
  agm-map {
    height: 300px;
  }
`]

})
export class PlacePage {
	lat: number;
	lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  this.lat = this.navParams.data.location.lat;
  this.lng = this.navParams.data.location.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss(){
  	this.viewCtrl.dismiss();
  }

}
