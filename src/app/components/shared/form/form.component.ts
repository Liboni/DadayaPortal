import { Component, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  event: Event =   {
      Id: 1,
      ImageLocation: "https://www.w3schools.com/w3css/img_lights.jpg",
      Message: "1",
      From: new Date,
      To: new Date,
      IsDeleted: true,    
      DateCreated: new Date,
    }
   formBody:any[];
   constructor() { }

  ngOnInit() {
    this.formBody=[];
    for (var prop in this.event) {
      if (!this.event.hasOwnProperty(prop)) continue; 
      console.log(prop);
             
      if(prop=="Id")continue
      console.log(typeof this.event[prop]);
      console.log(typeof prop);
      
      this.formBody.push({key:prop.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), value: this.event[prop], type:""})
    }
  }

}
