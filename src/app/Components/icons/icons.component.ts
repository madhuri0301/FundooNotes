import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any;

  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();

  isColor:string=''

  token_Id = localStorage.getItem('Token');

  constructor(public note: NotesService) { }

  ngOnInit(): void {
  }
  
  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
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

}

