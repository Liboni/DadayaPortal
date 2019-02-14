import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from './modules/alert/alert.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppBoostrapModule } from './modules/app-boostrap/app-boostrap.module';
import { LoginComponent } from './components/login/login.component';
import { NoticesComponent } from './components/notices/notices.component';
import { StaffComponent } from './components/staff/staff.component';
import { EventsComponent } from './components/events/events.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ConfigService } from './services/config/config.service';
import { RequestHandlerService } from './services/request-handler.service';
import { PrincipalMessageComponent } from './components/principal-message/principal-message.component';
import { JobTitleComponent } from './components/job-title/job-title.component';
import { FormComponent } from './components/shared/form/form.component';
import { TableComponent } from './components/shared/table/table.component';
import { PaginationService } from './services/pagination.service';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoaderModule } from './modules/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoticesComponent,
    StaffComponent,
    EventsComponent,
    ProjectsComponent,
    LoginComponent,
    PrincipalMessageComponent,
    JobTitleComponent,
    FormComponent,
    TableComponent,
    DashboardComponent         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppBoostrapModule,
    AlertModule,
    LoaderModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'notice', component: NoticesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'job-title', component: JobTitleComponent },
      { path: 'events', component: EventsComponent },
      { path: 'principal-message', component: PrincipalMessageComponent },
    ])
  ],
  providers: [ConfigService,RequestHandlerService,PaginationService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
