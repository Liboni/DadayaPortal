import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RequestHandlerService } from '../../services/request-handler.service';
import { AlertService } from '../../services/alert.service';
import { UrlPreffix } from '../../enums/url-preffix.enum';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnChanges  {
  list:any;
  item:any;
  mini:boolean=false;
  @Output() data = new EventEmitter<any>();
  constructor(private spinnerService: Ng4LoadingSpinnerService, private request: RequestHandlerService, private alert: AlertService) {
    this.spinnerService.show();
    this.request.getAll(UrlPreffix.Events).subscribe(result => {
      this.spinnerService.hide();
      this.list=result;      
    });
   }

  ngOnChanges() {    
  }

  toggle(close){
    this.mini=close;
  }

  editData(data){    
    this.item=data; 
    this.spinnerService.show();   
    this.request.put(data.id,data,UrlPreffix.Events).subscribe(result=>{        
      this.spinnerService.hide(); 
      //this.data.emit(result);
      let updateItem = this.list.find(this.findIndexToUpdate, result.id);
      let index = this.list.indexOf(updateItem);    
      this.list[index] = result;   
    },error=> {
      console.log(error);
      this.alert.create("Error", "", 5000, "Failed to edit event, please try again.");
      this.spinnerService.hide();
    })
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
}

  add(){
    this.mini=true;
  }

}
