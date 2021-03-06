import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  cardUpdateForm!: FormGroup;
  colorUpdate: any;
  colorData:string='';
  // noteId:any;
  

  tokenId = localStorage.getItem("Token");


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder,
  private noteService: NotesService) { }

  ngOnInit(): void {
    this.cardUpdateForm = this.formBuilder.group({
      noteId: this.data.noteId,
      title: this.data.title,
      colorUpdate: this.data.colorUpdate,
      description: this.data.description
    })
    console.log(this.data);
  }
  receiveIconColorUpdate=($colorData:string) => {
    this.colorUpdate = $colorData;
    console.log("update " + this.colorUpdate)

    let data={
      color: this.colorUpdate,
      noteIdList:[this.data.id]
    }
    console.log(data);
    this.noteService.changeColor(data,this.tokenId).subscribe((data) => {
      console.log("color changed ", data);
    })
  }
  updateNote(data: any) {
    let reqPayload = {
      noteId: this.data.id,
      title: this.cardUpdateForm.value.title,
      description: this.cardUpdateForm.value.description,
      color: this.colorUpdate
    }
    //new trash function rhega like  UpdateExistingNote usme sirf note id pass krna  "NotesId: this.cardUpdateForm.value.notesId"
    this.noteService.UpdateExistingNote(reqPayload).subscribe((response: any) => {
      console.log(response);
      // this.op = response.data;
      // this.op.reverse();
      // window.location.reload();
      // this.updateNote.(this.op);
    })
  }
}

