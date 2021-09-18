import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { ArchiveComponent } from '../archive/archive.component';
import { NotesComponent } from '../notes/notes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any;

  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();

  isColor:string='';

  token_Id = localStorage.getItem('Token');
  op: any;

  isNotesComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;

  constructor(public note: NotesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == NotesComponent) {
      this.isNotesComponent = true;
    }

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchiveComponent) {
      this.isArchiveComponent = true;
      console.log(this.isArchiveComponent);
    }

  }
  
  receiveColorCode = ($isColor:string) =>{
    console.log("icons " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
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
  restore(){
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList:[this.noteId],
      isDeleted:false
    }
    this.note.deleteNotes(data, this.token_Id).subscribe((data)=>{
      console.log("restore Successfully", data);
    });
  }
  permanent_delete(){
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList:[this.noteId],
      isDeleted:false
    }
    this.note.deleteForever(data, this.token_Id).subscribe((data)=>{
      console.log("parmanent Deleted Successfully", data);
    });
}
  archive() {
    console.log(this.noteId)
    let dataArchive = {
      noteIdList:[this.noteId],   
      "isArchived": true,    
    }
    console.log("note and boolean ", dataArchive);
    this.note.archivedNotes(dataArchive, this.token_Id).subscribe((dataArchive)=>{
      console.log("Archieve Successfully", dataArchive);
    });
  }
  unarchivePage() {
    console.log(this.noteId)
    let dataArchive = {
      noteIdList:[this.noteId],   
      "isArchived": false   
    }
    console.log("note and boolean ", dataArchive);
    this.note.archivedNotes(dataArchive, this.token_Id).subscribe((dataArchive)=>{
      console.log("Unarchieve Successfully", dataArchive);
    });
  }

}

