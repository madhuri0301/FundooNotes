import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService { 

  BaseUrl=environment.BaseUrl;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean){
    let options = {
      headers: new HttpHeaders({
        'Authorization': "token" + token, 
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.BaseUrl + url, data,options);
  }
  Get(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.get(this.BaseUrl + url, data);
  }
  Put(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.put(this.BaseUrl + url, data);
  }
    // get all notes
    GetallNotes(url: any) {
      let token = localStorage.getItem('Token');
      let options = {
        headers: new HttpHeaders({
          'Authorization': "token " + token,
          'Content-Type': 'application/json'
        })
      }
      return this.http.get(this.BaseUrl + url, options);
    }
  
  Delete(){}
}

