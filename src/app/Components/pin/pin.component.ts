import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  isColor:string=''
  isPinDisplayComponent: boolean = false;
  @Input() noteId:any;

  token_Id = localStorage.getItem('Token');

  constructor(public note: NotesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  pin(){
    console.log(this.noteId)
    let dataPin = {
      noteIdList:[this.noteId],   
      "isPined": true
    }
    console.log("note and boolean ", dataPin);
    this.note.pinUnpin(dataPin, this.token_Id).subscribe((dataPin)=>{
      console.log("Pined Successfully", dataPin);
    
    });
    
  }
  unpin(){
    console.log(this.noteId)
    let dataPin = {
      noteIdList:[this.noteId],   
      "isPined": false
    }
    console.log("note and boolean ", dataPin);
    this.note.pinUnpin(dataPin, this.token_Id).subscribe((dataPin)=>{
      console.log("UnPined Successfully", dataPin);
    });
  }
}
