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
    return this.http.Delete(`${this.url}notes/trashNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }
}
