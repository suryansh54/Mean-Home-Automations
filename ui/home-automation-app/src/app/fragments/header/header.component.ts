import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() childMessage: string;

  constructor(public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(EcoModeModal, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'create-automation-modal',
  templateUrl: 'modal/eco-mode.modal.html',
})
export class EcoModeModal {

  constructor(
    public dialogRef: MatDialogRef<EcoModeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}