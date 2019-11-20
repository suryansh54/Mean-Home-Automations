import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Featured Components
import { DashboardComponent } from './featured-component/dashboard/dashboard.component';
import { AddDeviceComponent } from './featured-component/add-device/add-device.component';
import { AboutComponent } from './featured-component/about/about.component';
import { DevicesComponent } from './featured-component/devices/devices.component';
import { UpdateComponent } from './featured-component/update/update.component';
import { ProfileComponent } from './featured-component/profile/profile.component';
import { GroupComponent } from './featured-component/group/group.component';
import { FaqComponent } from './featured-component/faq/faq.component';
import { FeedbackComponent } from './featured-component/feedback/feedback.component';

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
    path:'group' ,
    component: GroupComponent
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
  },
  {
    path:'faq' ,
    component: FaqComponent
  },
  {
    path:'feedback' ,
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
