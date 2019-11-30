import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  message: string = "light";
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.messageEvent.emit(this.message);
  }

  selectTheme(event) {
    this.messageEvent.emit(event.value);
  }
}
