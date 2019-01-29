import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  details: any[]=[];
  headings:any[]=[{property:String,value:String}]
  data:any[]=[{values:[]}]
  @Output() result = new EventEmitter<any>();
  @Input() input : any;
  @Input() toggle : boolean;
  @Output() mini = new EventEmitter<boolean>();
  small:boolean
  constructor() { }

  ngOnChanges() { 
    this.small =this.toggle; 
    this.details = this.input;
    console.log(this.input);
    
    this.headings= [];
    this.data=[];
    for (var key in this.details) {      
      if (!this.details.hasOwnProperty(key)) continue;
      var obj = this.details[key];
      let info=[]
      this.headings=[];
      for (var prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;        
        if(prop=="id" || prop=="Id")continue
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
  
  edit(data){
   this.small=true;
   this.result.emit(data);
   this.mini.emit(true);
  }
}
