import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertsPage } from './adverts';

@NgModule({
  declarations: [
    AdvertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertsPage),
  ],
})
export class AdvertsPageModule {}
