import { Component, OnInit, Inject } from '@angular/core';
import { DeviceService } from '../../../../services/featured-services/device/device.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-device-setting',
  templateUrl: './device-setting.component.html',
  styleUrls: ['./device-setting.component.scss']
})
export class DeviceSettingComponent implements OnInit {
  deviceId: string;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceId = this.route.snapshot.params.id;
  }

  removeDevice() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveDeviceModal, {
      width: '500px',
      data: { deviceId: this.deviceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'remove-device-modal',
  templateUrl: 'modal/remove-device-modal.html',
})

export class RemoveDeviceModal {

  constructor(
    public dialogRef: MatDialogRef<RemoveDeviceModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeDevice() {
    let deviceId = this.data.deviceId;
    this.deviceService.removeDevice(deviceId).subscribe(data => {
      this.dialogRef.close();
      this.router.navigateByUrl('/devices');
    })
    
  }
}