import { Component, OnInit, Inject } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {
  status: boolean = false;
  constructor(public dialog: MatDialog) { }
  
  search(){
      this.status = !this.status;       
  }
  
  routines: Array<any> = ["Light", "Fan", "Apple TV", "Heater", "Time", "Charge" ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.routines, event.previousIndex, event.currentIndex);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateRoutineModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'create-routine-modal',
  templateUrl: 'modal/create-routine.modal.html',
})
export class CreateRoutineModal {

  constructor(
    public dialogRef: MatDialogRef<CreateRoutineModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}