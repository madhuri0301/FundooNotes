import { Component, Input, OnInit } from '@angular/core';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  iconVisible: any
  @Input() allNotes: any = [];
  mate: any;

  constructor() { }

  ngOnInit(): void {
  }
  openDialog(note: any) {
    let dialogRef = this.mate.open(DialogContentComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe()
  }

  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }
}
