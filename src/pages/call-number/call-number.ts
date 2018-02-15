import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the CallNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
})
export class CallNumberPage {

  phoneNumber: string

  constructor(private platform: Platform, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallNumberPage');
  }

  async call() {
    await this.platform.ready();

    try {
      await this.callNumber.callNumber(this.phoneNumber, true)
      console.log('Opened dialer.')
    } catch(e) {
      console.error(e || 'Error launching dialer')
    }
  }

}
