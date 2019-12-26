import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceService } from '../../services/fragments_services/device.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  searchStatus: boolean = false;
  constructor(public dialog: MatDialog, public deviceService: DeviceService) { }

  search(){
      this.searchStatus = !this.searchStatus;       
  }

  ngOnInit() {
    
  }
  
  ngDoCheck() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'create-group-modal',
  templateUrl: 'modal/create-group.modal.html',
})

export class CreateGroupModal {

  constructor(
    public dialogRef: MatDialogRef<CreateGroupModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}