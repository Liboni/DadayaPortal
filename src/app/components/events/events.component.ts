import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { RequestHandlerService } from '../../services/request-handler.service';
import { AlertService } from '../../services/alert.service';
import { UrlPreffix } from '../../enums/url-preffix.enum';
import { EventMapper } from '../../models/event-mapper';
import { ActionType } from '../../enums/action-type.enum';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnChanges {
  list: any;
  item: any;
  mini: boolean = false;
  map = EventMapper;
  action: ActionType;
  @Output() data = new EventEmitter<any>();
  constructor(private router: Router, private request: RequestHandlerService, private alert: AlertService,private loader:LoaderService) {
    this.loader.show();
    this.request.getAll(UrlPreffix.Events).subscribe(result => {
      this.loader.hide();
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
        this.loader.show();
        this.request.put(data.data.id, data.data, UrlPreffix.Events).subscribe(result => {
          this.loader.hide();
          let updateItem = this.list.find(this.findIndexToUpdate, result.id);
          let index = this.list.indexOf(updateItem);
          this.list[index] = result;
          this.alert.create("Success", "success", 5000, "Event updated successfully.");
          this.mini = false;
        }, error => {
          this.loader.hide();
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
          this.alert.create("Error", "danger", 5000, "Failed to edit event, please try again.");
         
        })
        break;

      case ActionType.add:
        this.loader.show();
        this.request.post(data.data, UrlPreffix.Events).subscribe(result => {
          this.loader.hide();
          this.list.unshift(result);
          this.alert.create("Success", "success", 5000, "Event saved successfully.");
          this.mini = false;
        }, error => {
          this.loader.hide();
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
          this.alert.create("Error", "danger", 5000, "Failed to add event, please try again.");
          
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
      from: '',
      to: '',
      dateCreated: '',
      active: true
    }
  }
}
