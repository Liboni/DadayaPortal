import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActionType } from '../../enums/action-type.enum';
import { RequestHandlerService } from '../../services/request-handler.service';
import { AlertService } from '../../services/alert.service';
import { UrlPreffix } from '../../enums/url-preffix.enum';
import { JobTitleMapper } from '../../models/job-title-mapper';
import { JobTitle } from '../../interfaces/job-title';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnChanges {
  list: any;
  item: JobTitle;
  mini: boolean = false;
  map = JobTitleMapper;
  action: ActionType;
  @Output() data = new EventEmitter<any>();
  constructor(private router: Router, private request: RequestHandlerService, private alert: AlertService) {
    //this.spinnerService.show();
    this.request.getAll(UrlPreffix.JobTitles).subscribe(result => {
      //this.spinnerService.hide();
      this.list = result;      
    });
  }

  ngOnChanges() {
  }

  toggle(close) {
    this.mini = close;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  submit(data) {
    switch (data.actionType) {
      case ActionType.edit:
        //this.spinnerService.show();
        this.request.put(data.data.id, data.data, UrlPreffix.JobTitles).subscribe(result => {
          //this.spinnerService.hide();
          let updateItem = this.list.find(this.findIndexToUpdate, result.id);
          let index = this.list.indexOf(updateItem);
          this.list[index] = result;
          this.alert.create("Success", "success", 5000, "Job title updated successfully.");
          this.mini = false;
        }, error => {
          //this.spinnerService.hide();
          if (error.status == 401) {
            localStorage.removeItem("token");            
            this.alert.create(
              "Unauthorised",
              "danger",
              50000,
              "Please login and try again. If it fails contact the administrator"
            );
            this.router.navigate(['/login']); 
            return;     
          }
          this.alert.create("Error", "danger", 5000, "Failed to edit job title, please try again.");
        
        })
        break;

      case ActionType.add:
        //this.spinnerService.show();
        this.request.post(data.data, UrlPreffix.JobTitles).subscribe(result => {
          //this.spinnerService.hide();
          this.list.push(result);
          this.alert.create("Success", "success", 5000, "Job title saved successfully.");
          this.mini = false;
        }, error => {
          //this.spinnerService.hide();
          if (error.status == 401) {
            localStorage.removeItem("token");            
            this.alert.create(
              "Unauthorised",
              "danger",
              50000,
              "Please login and try again. If it fails contact the administrator"
            );
            this.router.navigate(['/login']); 
            return;     
          }
          this.alert.create("Error", "danger", 5000, "Failed to add job title, please try again.");
        
        })
        break;
    }
  }

  edit(data) {
    this.item = data;
    this.action = ActionType.edit;
  }

  add() {
    this.mini = true;
    this.action = ActionType.add;  
    this.item={
      id : 0,
      name : '',
      level :0,   
      active: true
    }  
  }

}
