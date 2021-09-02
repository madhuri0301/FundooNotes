import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  fullEdit: boolean = false;
  pin: boolean = false;
  title='';
  description='';
  isOpen = true;
  token: any;

  
 click() {
  this.isOpen = true;
 }

  constructor(private note: NotesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
  }
  addNote(){
    let data = {
      title: this.title,
      description: this.description,
    }
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", data);

    this.note.createNote(this.token, data).subscribe((response) => {
      console.log(response);
      
    })

  }
  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }

}