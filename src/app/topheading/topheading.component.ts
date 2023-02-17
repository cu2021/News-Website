import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../services/news-api-services.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent {
  constructor(private _services: NewsApiServicesService) {}
  public topheadingDisplaying: any = [];
  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topheadingDisplaying = result.articles;
    });
  }
}
