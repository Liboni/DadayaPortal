import { Component, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  details: any[]=[];
  headings:any[]=[{property:String,value:String}]
  data:any[]=[{values:[]}]
  events: Event[] = [
    {
      Id: 1,
      ImageLocation: "https://www.w3schools.com/w3css/img_lights.jpg",
      Message: "1",
      From: null,
      To: null,
      IsDeleted: true,    
      DateCreated: null,
    },
    {
      Id: 2,
      ImageLocation: "https://www.w3schools.com/w3css/img_forest.jpg",
      Message: "2",     
      From: null,
      To: null,
      IsDeleted: true,    
      DateCreated: null
    },
    {
      Id: 3,
      ImageLocation: "https://www.w3schools.com/w3css/img_mountains.jpg",
      Message: "3",     
      From: null,
      To: null,
      IsDeleted: true,    
      DateCreated: null
    },
    {
      Id: 4,
      ImageLocation: "https://www.w3schools.com/w3css/img_nature.jpg",
      Message: "4",    
      From: null,
      To: null,
      IsDeleted: true,     
      DateCreated: null,
    }
  ];
  constructor() { }

  ngOnInit() {
    this.details = this.events;
    this.headings= [];
    this.data=[];
    for (var key in this.details) {      
      if (!this.details.hasOwnProperty(key)) continue;
      var obj = this.details[key];
      let info=[]
      this.headings=[];
      for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;        
        if(prop=="Id")continue
        info.push(obj[prop])
        this.headings.push({value:prop.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), property: prop})
      }
      this.data.push({values:info});
    }            
  }

  isUrl(url) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
 }
}
