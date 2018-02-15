import { Badge } from '@ionic-native/badge';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the BadgesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badges',
  templateUrl: 'badges.html',
})
export class BadgesPage {

  badgeNumber: number;

  constructor(private badge: Badge) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgesPage');
  }

  async requestPermission() {
    try {
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async setBadges(badgeNumber: number) {
    try {
      let badges = await this.badge.set(badgeNumber);
      console.log(badges);
    } catch (e) {
      console.error(e);
    }
  }

  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log(badgeAmount);
    }
    catch (e) {
      console.error(e);
    }
  }

  async increaseBadges(badgeNumber: string) {
    try {
      let badge = await this.badge.increase(Number(badgeNumber));
      console.log(badge);
    } catch (e) {
      console.error(e);
    }
  }

  async decreaseBadges(badgeNumber: string) {
    try {
      let badge = await this.badge.decrease(Number(badgeNumber));
      console.log(badge);
    } catch (e) {
      console.error(e);
    }
  }

  async clearBadges(){
    try {
      let badge = await this.badge.clear();
      console.log(badge);
    }
    catch(e){
      console.error(e);
    }
  }
}
