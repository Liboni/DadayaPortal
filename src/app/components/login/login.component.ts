import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestHandlerService } from '../../services/request-handler.service';
import { AlertService } from '../../services/alert.service';
import { AppComponent } from '../../app.component';
import { MenuItemsService } from '../../services/menu-items.service';
import { UrlPreffix } from '../../enums/url-preffix.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form;
  constructor(private app:AppComponent, private alertService: AlertService, private router: Router, private requestHandler: RequestHandlerService) { }

  ngOnInit() {
  }

  login() {
    //this.spinnerService.show();
    this.requestHandler.post(JSON.stringify(this.form.value),UrlPreffix.Login).subscribe((results) => {
      //this.spinnerService.hide();
      localStorage.setItem('token', results.access_token);
      this.router.navigate(['/']);      
      this.app.menuItems = MenuItemsService.load(); 
    }, error => {
      //this.spinnerService.hide();
      this.errorHandling(error);
    });
  }

  errorHandling(error) {
    if (error.status == 401) {
      localStorage.removeItem("token");
      this.alertService.create(
        "Login",
        "danger",
        50000,
        "Incorrect username/password combination"
      );
    }
    else if (error.status == undefined) {
      this.alertService.create(
        "Login",
        "danger",
        50000,
        "Server is down, contact the administrator or try again later."
      );
    }
    else if (error.status == 500) {
      this.alertService.create(
        "Login",
        "danger",
        50000,
        "Internal error, please try again later."
      );
    }
    else {
      this.alertService.create(
        "Login",
        "danger",
        5000000,
        "An unexpected error occured, please try again."
      );
    }
  }
}
