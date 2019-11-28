import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor(private http: HttpClient) { }

  wifiList(){
    return this.http.get(environment.apiUrl+"/api/wifi");
  }

  connectedWifiNetwork(){
    return this.http.get(environment.apiUrl+"/api/wifi-current");
  }
}
