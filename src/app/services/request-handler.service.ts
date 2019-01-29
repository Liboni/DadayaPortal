import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestHandlerService {

  constructor(public http: HttpClient, public configService: ConfigService) { }

  post(formData, preffix):any {
    return this.http.post(this.configService.baseUrl(preffix.key) + preffix.variable, formData, this.configService.GetOptions())
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

  postFile(formData,preffix):any {
    return this.http.post(this.configService.baseUrl(preffix.key) + preffix.variable, formData)
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

  put(id, formData, preffix):any {
    return this.http.put(this.configService.baseUrl(preffix.key) + preffix.variable +'/'+ id, formData, this.configService.GetOptions())
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

  delete(id, preffix):any {
    return this.http.delete(this.configService.baseUrl(preffix.key) + preffix.variable +'/'+ id, this.configService.GetOptions())
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

  get(id, preffix):any {
    return this.http.get(this.configService.baseUrl(preffix.key) + preffix.variable + '/'+id, this.configService.GetOptions())
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

  getAll(preffix):any {
    return this.http.get(this.configService.baseUrl(preffix.key) + preffix.variable, this.configService.GetOptions())
      .map((response) => {
        return response;
      }).catch(this.configService.handleError);
  }

}
