import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition'
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-speech-to-text',
  templateUrl: 'speech-to-text.html',
})
export class SpeechToTextPage {

  speechList: Array<string> = [];
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;
 
  constructor(private platform: Platform, private speech: SpeechRecognition) {
  }

  async isSpeechSupported(): Promise<boolean> {
    let isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

  async getPermission(): Promise<void> {
    try {
      let permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    }
    catch (e) {
      console.error(e);
    }
  }

  async hasPermission(): Promise<boolean> {
    try {
      let permission = await this.speech.hasPermission();
      console.log(permission);
      return permission;
    }
    catch (e) {
      console.error(e);
    }
  }

  async getSupportedLanguages(): Promise<Array<string>> {
    try {
      let languages = await this.speech.getSupportedLanguages();
      console.log(languages);
      return languages;
    }
    catch (e) {
      console.error(e);
    }
  }

  listenForSpeech(): void {
 
    this.androidOptions = {
      prompt: 'Speak into your phone!'
    }
   
    this.iosOptions = {
      language: 'en-US'
    }
   
    if (this.platform.is('android')) {
      this.speech.startListening(this.androidOptions).subscribe(data => this.speechList = data, error => console.log(error));
    }
    else if (this.platform.is('ios')) {
      this.speech.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
    }
  }

  
}
