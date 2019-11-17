import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Featured Components
import { DashboardComponent } from './featured-component/dashboard/dashboard.component';
import { AddDeviceComponent } from './featured-component/add-device/add-device.component';
import { AboutComponent } from './featured-component/about/about.component';
import { DevicesComponent } from './featured-component/devices/devices.component';
import { UpdateComponent } from './featured-component/update/update.component';
import { ProfileComponent } from './featured-component/profile/profile.component';

const routes: Routes = [
  {
    path:'' ,
    component: DashboardComponent
  }, 
  {
    path:'add-device' ,
    component: AddDeviceComponent
  }, 
  {
    path:'about' ,
    component: AboutComponent
  },
  {
    path:'devices' ,
    component: DevicesComponent
  },{
    path:'firmware-update' ,
    component: UpdateComponent
  },
  {
    path:'profile' ,
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
