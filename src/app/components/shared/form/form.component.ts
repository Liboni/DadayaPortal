import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { RequestHandlerService } from '../../../services/request-handler.service';
import { UrlPreffix } from '../../../enums/url-preffix.enum';
import { AlertService } from '../../../services/alert.service';
import { ActionType } from '../../../enums/action-type.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Output() result = new EventEmitter<any>();
  @Input() input: any;
  @Input() mapper: any;
  @Input() actionType: ActionType;

  @Output() mini = new EventEmitter<boolean>();
  myform: any = {};
  formBody: any[];
  pic: String;
  date: any;
  constructor(public datepipe: DatePipe, private request: RequestHandlerService, private alert: AlertService) { }

  ngOnChanges() {
    this.formBody = [];
    for (var prop in this.input) {
      if (!this.input.hasOwnProperty(prop)) continue;
      if (this.mapper[prop].type === null) continue;
      let value = this.input[prop];
      let source = this.mapper[prop].source
      if (this.mapper[prop].type === 'image') this.pic = this.input[prop];
      if (this.input[prop] !== "" && this.mapper[prop].type === 'date')
        value = this.datepipe.transform(new Date(this.input[prop]), 'yyyy-MM-dd');
      this.formBody.push({ visible: this.mapper[prop].visible, id: prop, value: value, type: this.mapper[prop].type, display: this.mapper[prop].display, source: source, pattern: this.mapper[prop].regex, required: this.mapper[prop].required });
    }
  }

  onSubmit(data) {
    this.result.emit({
      data: data.value,
      actionType: this.actionType
    });
  }

  close() {
    this.mini.emit(false);
  }

  previewImage(event) {
    if (event.target.files[0]) {
      var file = event.target.files[0]
      var formData = new FormData();
      formData.append("file", file);
      //this.spinnerService.show();
      this.request.postFile(formData, UrlPreffix.File).subscribe(result => {
        //this.spinnerService.hide();
        if (result.Success) {
          this.pic = result.Data
          return;
        }
        this.alert.create("Error", "", 5000, result.Message);
        return;
      }, () => {
        //this.spinnerService.hide();
        this.alert.create("Error", "", 5000, "Failed to upload picture please try again, or add another picture");
      });
    }
  }


}
