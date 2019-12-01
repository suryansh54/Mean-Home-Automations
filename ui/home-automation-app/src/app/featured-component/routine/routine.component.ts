import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {

  constructor() { }

  routines: Array<any> = ["Light", "Fan", "Apple TV", "Heater", "Time", "Charge" ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.routines, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
