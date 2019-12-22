import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  help: string = "sjdhfksdhf"
  isSpecial: boolean = false;
  name: string = "Hello";
  constructor() { }
  onClickSuryansh(){
    alert('Hello');
  }
  ngOnInit() {
  }

  getVal() {
    return 5;
  }
}
