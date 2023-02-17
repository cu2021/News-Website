import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../services/news-api-services.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css'],
})
export class BusinessNewsComponent {
  constructor(private _service: NewsApiServicesService) {}

  businessNewDisplaying: any = [];

  ngOnInit(): void {
    this._service.businessNews().subscribe((result) => {
      this.businessNewDisplaying = result.articles;
    });
  }
}
