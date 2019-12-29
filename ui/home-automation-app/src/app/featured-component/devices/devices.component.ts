import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DeviceService } from '../../services/fragments_services/device.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: any;
  totalDevice: number;
  searchStatus: boolean = false;
  constructor(private device: DeviceService, private router: Router) { }

  @ViewChild("searchBox", {static: false}) searchElement: ElementRef;
  
  searching(text: string) {
    console.log("Search Logic here", text)
  }

  searchEventHandler(){
    this.searchStatus = !this.searchStatus;   
    let searchedText:string = this.searchElement.nativeElement.value.trim();
    setTimeout(()=>{this.searchElement.nativeElement.focus()}, 100)
    if(searchedText.length > 0) {
      this.searchStatus = true;   
      setTimeout(()=>{this.searchElement.nativeElement.focus()}, 100)
      this.searching(searchedText);
    } 
  }
  
  deviceLoader: boolean = true;
  // Get devices
  deviceList(){
    this.device.getDevices().subscribe((device: any) => {
      this.devices = device.data;
      this.deviceLoader = false;
      this.totalDevice = this.devices.length;
    },error => {
      if(error instanceof HttpErrorResponse) {
        if(error.status === 401) {
          alert('Unauthorized access');
          this.router.navigateByUrl('/auth');
        }
      }
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
