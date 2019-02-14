import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSettings = new Subject<Boolean>();

  constructor() { }

  show(){
    this.loaderSettings.next(true);   
  }

  hide(){
    this.loaderSettings.next(false);   
  }
}
