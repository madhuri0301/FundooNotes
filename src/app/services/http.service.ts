import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService { 

  BaseUrl=environment.BaseUrl;
  token : any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.BaseUrl + url, data,options);
  }
  // to redirect
  // postt(url: any, data: any, token: any, headers: boolean)
  // {
  //   return this.http.post(this.BaseUrl + url, data);
  // }
  //
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
       this.token = localStorage.getItem('Token');
      let options = {
        headers: new HttpHeaders({
          'Authorization': this.token,
          'Content-Type': 'application/json'
        })
      }
      return this.http.get(this.BaseUrl + url, options);
    }
  //update notes
  UpdateNote(id: any) {
    console.log(id);
    const data = {
      noteId:id.noteId,
      title: id.title,
      description: id.description
    }
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + '/notes/updateNotes', data, options);
  }
  Delete(){
    
  }
}

