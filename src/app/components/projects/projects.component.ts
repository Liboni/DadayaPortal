import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProjectMapper } from '../../models/project-mapper';
import { ActionType } from '../../enums/action-type.enum';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RequestHandlerService } from '../../services/request-handler.service';
import { AlertService } from '../../services/alert.service';
import { UrlPreffix } from '../../enums/url-preffix.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnChanges {
  list: any;
  item: any;
  mini: boolean = false;
  map = ProjectMapper;
  action: ActionType;
  @Output() data = new EventEmitter<any>();
  constructor(private router: Router,private spinnerService: Ng4LoadingSpinnerService, private request: RequestHandlerService, private alert: AlertService) {
    this.spinnerService.show();
    this.request.getAll(UrlPreffix.Projects).subscribe(result => {
      this.spinnerService.hide();
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
        this.spinnerService.show();
        this.request.put(data.data.id, data.data, UrlPreffix.Projects).subscribe(result => {
          this.spinnerService.hide();
          let updateItem = this.list.find(this.findIndexToUpdate, result.id);
          let index = this.list.indexOf(updateItem);
          this.list[index] = result;
          this.alert.create("Success", "success", 5000, "Project updated successfully.");
          this.mini = false;
        }, error => {
          this.spinnerService.hide();
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
          this.alert.create("Error", "danger", 5000, "Failed to edit project, please try again.");
        })
        break;

      case ActionType.add:
        this.spinnerService.show();
        this.request.post(data.data, UrlPreffix.Projects).subscribe(result => {
          this.spinnerService.hide();
          this.list.unshift(result);
          this.alert.create("Success", "success", 5000, "Project saved successfully.");
          this.mini = false;
        }, error => {
          this.spinnerService.hide();
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
          this.alert.create("Error", "danger", 5000, "Failed to add project, please try again.");
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
    this.item = {
      id: 0,
      imageLocation: '',
      heading: '',
      message: '',  
      dateCreated: '',
      active: true
    }
  }
}