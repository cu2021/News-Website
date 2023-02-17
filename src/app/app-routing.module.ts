import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TopheadingComponent }, //Home
  { path: 'tech', component: TechNewsComponent }, //TechNewsComponent
  { path: 'business', component: BusinessNewsComponent }, //BusinessNewsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
