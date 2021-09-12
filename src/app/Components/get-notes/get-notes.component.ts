import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  token: any;
  isTrash = true
  notesArray: any = []
  // @Input() notes: any = []

  constructor(private note: NotesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }

  GetAllNotes() {
    this.note.GetAllNotes('Notes').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data.data;
      this.notesArray.reverse();
      console.log(this.notesArray);

    })
  }

  refreshNotes(value:any ){
    console.log(value);
    this.GetAllNotes();
  }
 
}