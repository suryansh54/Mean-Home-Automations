import { Component, OnInit } from '@angular/core';
import { WifiService } from '../../services/machine-service/wifi.service';

interface WifiProvider {
    mac: string,
    bssid: string,
    ssid: string,
    channel: number,
    frequency: number,
    signal_level: number,
    quality: number,
    security: string ,
    security_flags: string,
    mode: string
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  wifiListArr: Array<WifiProvider>;
  currentWifi: Array<WifiProvider>;
  constructor(private wifi: WifiService) { }

  wifiList(){
    this.wifi.wifiList().subscribe(data=>{
      this.wifiListArr = data['networks'];
    });
  }

  currentWiFiNetwork(){
    this.wifi.connectedWifiNetwork().subscribe(data=>{
      this.currentWifi = data['networks'];
    });
  }

  ngOnInit() {
    this.wifiList();
    this.currentWiFiNetwork();
  }

}
