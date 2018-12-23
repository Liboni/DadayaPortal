import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AlertModule } from './modules/alert/alert.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 

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
    TableComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppBoostrapModule,
    AlertModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'table', component: TableComponent },
      { path: 'form', component: FormComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'notice', component: NoticesComponent },
      { path: 'job-title', component: JobTitleComponent },
      { path: 'events', component: EventsComponent },
      { path: 'principal-message', component: PrincipalMessageComponent },
    ])
  ],
  providers: [ConfigService,RequestHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
