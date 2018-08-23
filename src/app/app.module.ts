import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBoostrapModule } from './modules/app-boostrap/app-boostrap.module';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'gallery', component: GalleryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
