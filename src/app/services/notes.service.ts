import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private refresh = new Subject<void>();
 

  constructor(private http: HttpService) { }
  getRefreshedData() {
    return this.refresh;
  }
  url = environment.BaseUrl;

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
  //delete Notes
  deleteNotes = (userData: any, token: any) => {
    return this.http.Delete(`${this.url}/notes/trashNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }
  trashNotes = (token: any) => {
    return this.http.Trash(`${this.url}/notes/getTrashNotesList`, true, token)
  }
  changeColor = (dataColor: any, token: any) => {
    return this.http.Color(`${this.url}/notes/changesColorNotes`, dataColor, true, token)
  }
  // updateColor(data: any) {
  //   return this.http.UpdateColor(data);
  // }
  archivedNotes = (userData : any, token: any) => {
    return this.http.Archive(`${this.url}/notes/archiveNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }
  getArchieveNotes = (token: any) => {
    return this.http.getArchive(`${this.url}/notes/getArchiveNotesList`, true, token)
  }
  deleteForever(data: any, token: any){
    return this.http.Delete(`${this.url}/notes/deleteForeverNotes`, data,true, token);
  }
  pinUnpin = (dataColor: any, token: any) => {
    return this.http.Pin(`${this.url}/notes/pinUnpinNotes`, dataColor, true, token)
  }
}
