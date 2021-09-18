import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.BaseUrl;
  token: any;

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.BaseUrl + url, data, options);
  }

  // to redirect
  postt(url: any, data: any, token: any, headers: boolean) {
    return this.http.post(this.BaseUrl + url, data);
  }

  // Get(url: any, data: any, token: any, headers: boolean)
  // {
  //   return this.http.get(this.BaseUrl + url, data);
  // }
  Put(url: any, data: any, token: any, headers: boolean) {
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
      noteId: id.noteId,
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

  //Delete Notes
  Delete(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let options = { headers: new HttpHeaders({ "Authorization": token }) };
    return this.http.post(url, data, isHeaderRequired && options)
  }

  //collect those deleted notes
  Trash(url: string, isHeaderRequired: any = false, token: any = null) {
    console.log("data Get");
    let Options = { headers: new HttpHeaders({ "Authorization": token }) };
    return this.http.get(url, isHeaderRequired && Options)
  }

  //coloring notes
  Color(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let options = { headers: new HttpHeaders({ "Authorization": token }) };
    return this.http.post(url, data, isHeaderRequired && options)
  }

  // UpdateColor(data: any) {
  //   console.log(data)
  //   const id = data.NoteId;
  //   const color = data.color;

  //   let token = localStorage.getItem('Token');
  //   let options = {
  //     headers: new HttpHeaders({
  //       'Authorization': this.token,
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.http.post(this.BaseUrl + '/notes/changesColorNotes', data, options);
  // }

  Archive(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let options = { headers: new HttpHeaders({ "Authorization": token }) };
    return this.http.post(url, data, isHeaderRequired && options)
  }

  getArchive(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data Got");
    let tokenOption = {headers: new HttpHeaders({"Authorization": token})};
    return this.http.get(url, isHeaderRequired && tokenOption)
  }
  Pin(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let options = { headers: new HttpHeaders({ "Authorization": token }) };
    return this.http.post(url, data, isHeaderRequired && options)
  }

}



