import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: any;
  constructor(private device: DeviceService) { }

  // Get devices
  deviceList(){
    this.device.getDevices().subscribe((data) => {
      this.devices = data;
    })
  }
  ngOnInit() {
    this.deviceList();
  }

}
