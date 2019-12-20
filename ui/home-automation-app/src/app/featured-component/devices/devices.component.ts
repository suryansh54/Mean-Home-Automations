import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/fragments_services/device.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: any;
  totalDevice: number;
  status: boolean = false;
  constructor(private device: DeviceService, private router: Router) { }

  search(){
    this.status = !this.status;       
  }
  
  deviceLoader: boolean = true;
  // Get devices
  deviceList(){
    this.device.getDevices().subscribe((device: any) => {
      this.devices = device.data;
      this.deviceLoader = false;
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
