import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseUrlType } from '../../enums/base-url-type.enum';

@Injectable()
export class ConfigService {

  constructor(private router: Router) { }

  public baseUrl(key:BaseUrlType) {    
    switch (key) {
      case BaseUrlType.Main:
        return "http://localhost:52337/";     
        case BaseUrlType.File:
        return "http://192.168.10.231:1020/";     
      default:
        return "";
    }

  }

  public handleError(error) {
    return Observable.throw(error);
  }

  public GetOptions() {     
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(localStorage.getItem("token"))
      })
    };
  }


}
