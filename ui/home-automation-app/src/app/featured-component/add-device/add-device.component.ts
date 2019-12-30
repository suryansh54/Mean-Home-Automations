import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceService } from '../../services/featured-services/device/device.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  deviceTimeout: any;
  constructor(public deviceService: DeviceService, public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    this.deviceTimeout = setTimeout(() => {
      this.openDialog();
    }, 3000)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceModal, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    clearTimeout(this.deviceTimeout);
  }

  
}

@Component({
  selector: 'add-device-modal',
  templateUrl: 'modal/add-device.modal.html',
})

export class AddDeviceModal implements OnDestroy {
  createDevice: Subscription;
  addDeviceForm = new FormGroup({
    deviceName: new FormControl('', [Validators.required]),
    deviceGroupName: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<AddDeviceModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public deviceService: DeviceService, public router: Router, public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDevice() {
    const addDeviceFormData = this.addDeviceForm.value;
    this.createDevice = this.deviceService.createDevice(addDeviceFormData.deviceName, addDeviceFormData.deviceGroupName).subscribe(data => {
      this.dialogRef.close();
      this.router.navigateByUrl('/devices');
    })
  }

  ngOnDestroy() {
    // this.createDevice.unsubscribe();
  }

  

  openGroupModel() {
    console.log('Open Group Model');
  }
}


