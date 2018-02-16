import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
// import { AdvertProvider } from '../../providers/advert/advert';

/**
 * Generated class for the AdvertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adverts',
  templateUrl: 'adverts.html',
})
export class AdvertsPage {
  // private advert: AdvertProvider
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      // Splashscreen.hide();
      // this.advert.showBanner();
      // this.advert.showInterstitial();

    });
  }

}
