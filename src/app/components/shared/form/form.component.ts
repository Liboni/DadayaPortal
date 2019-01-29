import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { RequestHandlerService } from '../../../services/request-handler.service';
import { UrlPreffix } from '../../../enums/url-preffix.enum';
import { AlertService } from '../../../services/alert.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Output() result = new EventEmitter<any>();
  @Input() input : any;
  @Output() mini= new EventEmitter<boolean>();
  myform: any = {};
  formBody: any[];
  pic: String = "";
  title: string = "Save"
  constructor(private spinnerService: Ng4LoadingSpinnerService, private request: RequestHandlerService, private alert: AlertService) { }

  ngOnChanges() {
    this.formBody = [];
    for (var prop in this.input) {
      if (!this.input.hasOwnProperty(prop)) continue;
      let type = "";
      switch (typeof this.input[prop]) {
        case "string":
          type = "text";
          break;
        case "number":
          type = typeof this.input[prop];
          break;
        case "boolean":
          type = "checkbox";
          break;
        case "object":
          type = "date";
          break;
        default:
          break;
      }
      if (this.isUrl(this.input[prop])) this.pic = this.input[prop];
      this.formBody.push({ key: prop.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), value: this.input[prop], type: type, prop: prop });
    }    
  }

  onSubmit(data) {
    this.result.emit(data.value);
  }

  isUrl(url) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
  }

  close(){
    this.mini.emit(false);
  }

  previewImage(event) {
    if (event.target.files[0]) {
      var file = event.target.files[0]
      var formData = new FormData();
      formData.append("file", file);
      this.spinnerService.show();
      this.request.postFile(formData, UrlPreffix.File).subscribe(result => {
        this.spinnerService.hide();
        if (result.Success) {
          this.pic = result.Data
          return;
        }
        this.alert.create("Error", "", 5000, result.Message);
        return;
      }, () => {
        this.spinnerService.hide();
        this.alert.create("Error", "", 5000, "Failed to upload picture please try again, or add another picture");
      });
    }
  }
}
