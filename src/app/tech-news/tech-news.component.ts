import { Component } from '@angular/core';
import { NewsApiServicesService } from '../services/news-api-services.service';


@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {

constructor(private _service: NewsApiServicesService) { }
TechNewsDisplaying:any = [];
ngOnInit(): void {
  this._service.technews().subscribe((result)=> {
this.TechNewsDisplaying = result.articles;
  })
}
}
