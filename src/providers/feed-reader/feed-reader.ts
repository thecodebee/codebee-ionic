import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FeedReaderProvider {

  private rssToJsonUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(public http: Http) {
    console.log('Hello FeedReaderProvider Provider');
  }

  getPosts(url: string): Observable<any[]> {
    let feedURL = this.rssToJsonUrl + url;
    return this.http
            .get(feedURL)
            .map(resp => resp.json().items)
            .catch((error: any) => Observable.throw(error.json()));
  }

  getAbout(url: string): Observable<any[]> {
    let feedURL = this.rssToJsonUrl + url;
    return this.http
            .get(feedURL)
            .map(resp => resp.json().feed)
            .catch((error: any) => Observable.throw(error.json()));
  }
}
