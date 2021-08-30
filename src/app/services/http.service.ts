import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService { 

  BaseUrl=environment.BaseUrl;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.BaseUrl + url, data);
  }
  Get(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.get(this.BaseUrl + url, data);
  }
  Put(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.put(this.BaseUrl + url, data);
  }
  Delete(){}
}

