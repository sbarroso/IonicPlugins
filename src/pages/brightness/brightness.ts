import { Brightness } from '@ionic-native/brightness';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrightnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brightness',
  templateUrl: 'brightness.html',
})
export class BrightnessPage {

  brightness: number;
  screenSleep: boolean = false;
 
  constructor(private bright: Brightness) { }
 
  setBrightness() {
      let newBright = this.brightness / 10
      this.bright.setBrightness(newBright)
  }

  getBrightness() {
    this.bright.getBrightness().then(data => {
      console.log(data);
      this.brightness = Math.round(data * 10);
      if(String(this.brightness) === "-1.0"){
        console.log("Brightness is system default.");
      }
    });
  }

  toggleScreenSleep(){
    this.screenSleep = !this.screenSleep;
    this.bright.setKeepScreenOn(this.screenSleep);
  }

}
