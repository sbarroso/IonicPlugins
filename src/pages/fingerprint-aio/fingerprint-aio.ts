import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';

/**
 * Generated class for the FingerprintAioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint-aio',
  templateUrl: 'fingerprint-aio.html',
})
export class FingerprintAioPage {

  fingerprintOptions: FingerprintOptions

  constructor(private platform: Platform, private fingerprint: FingerprintAIO) {
    this.fingerprintOptions = {
      clientId: 'fingerprint.demo',
      clientSecret: 'password',
      disableBackup: true
    }
  }

  async showFingerprintDialog() {
    try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if (available === "OK") {
        const result = await this.fingerprint.show(this.fingerprintOptions);
        console.log(result);
      }
    } catch(e) {
      console.error(e);
    }
  }
}
