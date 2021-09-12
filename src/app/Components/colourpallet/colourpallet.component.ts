import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colourpallet',
  templateUrl: './colourpallet.component.html',
  styleUrls: ['./colourpallet.component.scss']
})
export class ColourpalletComponent implements OnInit {
  @Output() ItemEvent:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  colors=['#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#fff7e6','#FBBC04', '#f28b82','#fbbc04','#fff475','#fdcfe8','#e6c9a8','#0080ff']

  colorCode: any

  passColor = (colorCode:string) => {
    this.colorCode = colorCode
    console.log({color: colorCode});
    this.ItemEvent.emit(colorCode);
  }
}


