import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DemosComponent } from './demos/demos.component';
import { BlogListComponent } from './blog/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail.component';
import { IFAQComponent } from './ifaq/ifaq.component';
import { CareersComponent } from './careers/careers.component';
import { CareersDetailComponent } from './careers/careers-detail.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/technical-advisors', component: NewsDetailComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/:slug', component: BlogDetailComponent },
  { path: 'ifaq', component: IFAQComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'careers/:slug', component: CareersDetailComponent },
  { path: '**', redirectTo: '' },
];
