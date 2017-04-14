import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { FeedReaderProvider } from '../../providers/feed-reader/feed-reader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private feedUrl: string = 'http%3A%2F%2Fthecodebee.com%2Ffeed.xml';
  feeds: any[];
  
  constructor(public navCtrl: NavController, public platform: Platform, public feedReaderProvider: FeedReaderProvider) {
    // console.log("home page ");
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      this.loadSettings();
    });
    
  }

  loadSettings(): void {
    this.feedReaderProvider.getPosts(this.feedUrl)
        .subscribe(
          data => {
            this.feeds = data;
            // console.log("feeds...",this.feeds);
          }
        );
  }

}
