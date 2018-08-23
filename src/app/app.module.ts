import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBoostrapModule } from './modules/app-boostrap/app-boostrap.module';
import { PortalComponent } from './components/portal/portal.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NoticesComponent } from './components/notices/notices.component';
import { StaffComponent } from './components/staff/staff.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    NewsComponent,
    NoticesComponent,
    StaffComponent,
    EventsComponent,
    ProjectsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBoostrapModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'notice', component: NoticesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'gallery', component: GalleryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
