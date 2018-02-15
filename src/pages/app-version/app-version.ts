import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@IonicPage()
@Component({
  selector: 'page-app-version',
  templateUrl: 'app-version.html',
})
export class AppVersionPage {

  constructor(private app: AppVersion) {
  }

  async getAppName(){
    const appName = await this.app.getAppName();
    console.log(appName);
  }

  async getPackageName() {
    const packageName = await this.app.getPackageName();
    console.log(packageName);
  }

  async getVersionNumber() {
    const versionNumber = await this.app.getVersionNumber();
    console.log(versionNumber);
  }

  async getVersionCode() {
    const versionCode = await this.app.getVersionCode();
    console.log(versionCode);
  }

}
