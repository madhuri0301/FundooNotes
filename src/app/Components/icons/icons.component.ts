import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any;

  token_Id = localStorage.getItem('Token');

  constructor(public note: NotesService) { }

  ngOnInit(): void {
  }
    delete(){
      console.log(this.noteId);
      //alert(this.token_Id)
      let data = {
        noteIdList:[this.noteId],
        isDeleted:true
      }
      this.note.deleteNotes(data, this.token_Id).subscribe((data)=>{
        console.log("Deleted Successfully", data);
      });
  }

}

