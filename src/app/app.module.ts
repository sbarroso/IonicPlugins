import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CallNumber } from '@ionic-native/call-number';
import { AppVersion } from '@ionic-native/app-version';
import { Brightness } from '@ionic-native/brightness';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Flashlight } from '@ionic-native/flashlight'
import { SQLite } from '@ionic-native/sqlite';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Network } from '@ionic-native/network';
import { Badge } from '@ionic-native/badge';
import { Vibration } from '@ionic-native/vibration';
import { VideoPlayer } from '@ionic-native/video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';
// import { AdvertProvider } from '../providers/advert/advert';
// import { AdMob } from '@ionic-native/admob';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    AppVersion,
    // AdvertProvider,
    // AdMob,
    Brightness,
    FingerprintAIO,
    Flashlight,
    SQLite,
    DatabaseProvider,
    SpeechRecognition,
    Network,
    Badge,
    Vibration,
    VideoPlayer
  ]
})
export class AppModule {}
