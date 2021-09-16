import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archieveNote:any=[];
  notes:any=[];

  token_Id = localStorage.getItem('Token');
  notesArray: any;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getArchieve());
  }
  getArchieve(){
    console.log("getting archive")
    this.archieveNote=this.noteService.getArchieveNotes(this.token_Id).subscribe((data:any)=>{
      this.notes=data['data'].data 
      // this.notes=this.archieveNote
      console.log(data);

      
    })
  }
}
