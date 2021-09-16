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
      let notesArr = response.data.data;
      notesArr.reverse();
      console.log(notesArr);
      this.notesArray=notesArr.filter((noteData:any)=>{
        return noteData.isDeleted === false ;
       });
      //   this.notesArray=notesArr.filter((noteData:any)=>{
      //   return noteData.isArchived === false ;
      // }); 
    console.log(this.notesArray);
    })
  
  }


  refreshNotes(value:any ){
    console.log(value);
    this.GetAllNotes();
  }
 
}