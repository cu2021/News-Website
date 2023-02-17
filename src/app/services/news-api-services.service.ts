import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NewsApiServicesService {
  constructor(private _http: HttpClient) {}
  //Headlines (home) Api Url
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=79dbcf53afef47f9ada1b89f8452b76e';
  //Tech news Api Url
  technewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=79dbcf53afef47f9ada1b89f8452b76e';
  //business news Api Url
  businessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79dbcf53afef47f9ada1b89f8452b76e';

  //Headlines
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
  //Tech news
  technews(): Observable<any> {
    return this._http.get(this.technewsApiUrl);
  }
  //business news
  businessNews(): Observable<any> {
    return this._http.get(this.businessNewsApiUrl);
  }
}
