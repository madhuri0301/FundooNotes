import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  GetAllNotes(url: any) {
    console.log("given data is", url);
    return this.http.GetallNotes('/notes/getNotesList');
  }

  //create notes
  createNote(token: any, data: any) {
    return this.http.Post('/notes/addNotes', data, token, true);

  }
  UpdateExistingNote(data: any) {
    return this.http.UpdateNote(data);
  }
}
