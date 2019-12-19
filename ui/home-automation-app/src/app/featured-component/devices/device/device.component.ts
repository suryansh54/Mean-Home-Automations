import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  deviceId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceId = this.route.snapshot.params.id;
  }

}
