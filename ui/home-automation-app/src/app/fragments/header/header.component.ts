import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() childMessage: string;
  constructor() { 
    console.log("Console from Constructor");
    
  }
  message: string = "light";
  @Output() messageEvent = new EventEmitter<string>();
  
  ngOnInit() {
    console.log("Console from ngOnInit");
    this.messageEvent.emit(this.message);
    console.log(this.childMessage)
  }

  selectTheme(event) {
    this.messageEvent.emit(event.value);
  }
}
