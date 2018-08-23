import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBoostrapModule } from './modules/app-boostrap/app-boostrap.module';
import { PortalComponent } from './components/portal/portal.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
