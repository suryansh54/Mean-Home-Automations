import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getDevices(){
    return this.http.get(environment.apiUrl+'/api/device/all');
  }

  createDevice(DeviceName: string, DeviceGroup: string) {
    return this.http.post(environment.apiUrl+'/api/device', 
      {
        "DeviceName": DeviceName,
        "DeviceGroup": DeviceGroup,
        "DeviceType": "DeviceType",
        "DeviceIcon": "DeviceIcon",
        "DeviceDescription": "DeviceDescription",
        "DeviceCreator": "DeviceCreator",
        "DeviceImage": "DeviceImage",
        "DeviceRemoteId": "DeviceRemoteId",
        "DeviceSetting": "DeviceSetting",
        "DeviceCurrentStatus": "1"
      }
    );
  }

  removeDevice(id: string) {
    return this.http.delete(environment.apiUrl+'/api/device/'+id);
  }

  
}
