import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FeedReaderProvider } from '../../providers/feed-reader/feed-reader';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private feedUrl: string = 'http%3A%2F%2Fthecodebee.com%2Ffeed.xml';
  feed: any;

  constructor(public navCtrl: NavController, public platform: Platform, public feedReaderProvider: FeedReaderProvider) {
    // console.log("about page ");
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      this.loadSettings();
    });
    
  }

  loadSettings(): void {
    this.feedReaderProvider.getAbout(this.feedUrl)
        .subscribe(
          data => {
            this.feed = data;
            // console.log("about feed...",this.feed);
          }
        );
  }

}
