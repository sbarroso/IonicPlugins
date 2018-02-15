import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(private platform: Platform, private vibration: Vibration) {
  }

  async triggerVibration() {
    await this.platform.ready();

    this.vibration.vibrate([1000,2000,2000]);

  }
}
