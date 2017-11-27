import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';

@Injectable()
export class HttpService {

  private baseUrl: string;
  constructor(
    private http: Http
  ) {
    this.baseUrl = '';
  }


  public httpResult(requestUrl, requestJson) {
    return this.httpRequestPost(requestUrl, requestJson)
      .map(response => response.json())
      .catch(this.handlerError);
  }

  private httpRequestPost(requestUrl, requestJson) {
    const body: string = JSON.stringify(requestJson);
    const header: any = new Headers({ 'Content-type': 'application/json' });
    const options: any = new RequestOptions({ headers: header });
    return this.http.post(this.baseUrl + requestUrl, body, options)
      .timeout(10000);
  }

  private handlerError(error: Response | any) {
    const body = error.json() || {};
    return Observable.throw(body);
  }

}
