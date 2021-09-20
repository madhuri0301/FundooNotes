import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
 
  @Input() allNotes: any = [];
  tokenId = localStorage.getItem("Token");

  colorData:string='';

  

  constructor(public note: NotesService, private mate: MatDialog) { }

  ngOnInit(): void {
    // this.note.GetAllNotes( this.tokenId).subscribe((userData:any) => {

  //     this.allNotes=userData['data'].data
  //     this.allNotes=userData['data'].data.reverse()
  //     this.allNotes=this.allNotes.filter((noteData:any)=>{
  //      return noteData.isDeleted === false ;
  //     });
  //   })
  }
  receiveToUpdate=($colorData:string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData) 
  }

  openDialog(note: any) {
    let dialogRef = this.mate.open(DialogContentComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe()
  }
}
