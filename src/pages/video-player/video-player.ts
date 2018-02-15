import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

/**
 * Generated class for the VideoPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {

  videoOptions: VideoOptions = {
    volume: 0.7,
  }
  videoUrl: string = "http://techslides.com/demos/sample-videos/small.mp4";

  constructor(private videoPlayer: VideoPlayer) {
  }

  async playVideo() {
    try {
      setTimeout(() => {
        this.stopVideo();
      }, 2000);

      await this.videoPlayer.play(this.videoUrl, this.videoOptions)

      console.log('Video has completed')
    }catch(e) {
      console.error(e);
    }
  }

  stopVideo() {
    this.videoPlayer.close();
    console.log('he video was stopped.');
  }

}
