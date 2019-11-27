import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: any;
  totalDevice: number;
  constructor(private device: DeviceService, private router: Router) { }

  // Get devices
  deviceList(){
    this.device.getDevices().subscribe((data) => {
      this.devices = data;
      this.totalDevice = this.devices.length;
    },error=>{
      console.log(error);
    })
  }

  routeToAddDevice(){
    this.router.navigateByUrl('/add-device');
  }
  ngOnInit() {
    this.deviceList();
  }

}
