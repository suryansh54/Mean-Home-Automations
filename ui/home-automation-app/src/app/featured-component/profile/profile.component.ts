import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private location: LocationService) { }
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        console.log(position.coords.longitude, position.coords.latitude);
      });
    }
  }

  ngOnInit() {
    this.setCurrentLocation();
  }

}
