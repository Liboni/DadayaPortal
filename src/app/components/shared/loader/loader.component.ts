import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  modalStatus: boolean;

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.loaderSettings.subscribe((data)=>{
      console.log(data.valueOf());
      
      this.modalStatus = data.valueOf()
    })
  }

}
