import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeechToTextPage } from './speech-to-text';

@NgModule({
  declarations: [
    SpeechToTextPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeechToTextPage),
  ],
})
export class SpeechToTextPageModule {}
