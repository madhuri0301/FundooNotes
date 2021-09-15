import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  // @Input() allNotes: any = [];
  // @Input() notes: any = [];
  notes:any=[];
  
  
  token_Id = localStorage.getItem('Token');

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getAllTrash();
    this.noteService.getRefreshedData().subscribe(() => this.getAllTrash());
  }
  getAllTrash(){
    console.log("Getting trash")
    this.noteService.trashNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data);
      this.notes= data.data.data; 
      console.log(this.notes);
    })
  }
}