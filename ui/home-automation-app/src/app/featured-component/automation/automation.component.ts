import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAutomationModal, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'create-automation-modal',
  templateUrl: 'modal/create-automation.modal.html',
})
export class CreateAutomationModal {

  constructor(
    public dialogRef: MatDialogRef<CreateAutomationModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}