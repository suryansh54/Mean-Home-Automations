import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard as AuthRoute } from './services/auth-services/auth.guard';

// Featured Components
import { DashboardComponent } from './featured-component/dashboard/dashboard.component';
import { AddDeviceComponent } from './featured-component/add-device/add-device.component';
import { AboutComponent } from './featured-component/about/about.component';
import { DevicesComponent } from './featured-component/devices/devices.component';
import { DeviceComponent } from './featured-component/devices/device/device.component'
import { UpdateComponent } from './featured-component/update/update.component';
import { ProfileComponent } from './featured-component/profile/profile.component';
import { GroupComponent } from './featured-component/group/group.component';
import { FaqComponent } from './featured-component/faq/faq.component';
import { FeedbackComponent } from './featured-component/feedback/feedback.component';
import { SettingComponent } from './featured-component/setting/setting.component';
import { NotificationComponent } from './featured-component/notification/notification.component';
import { AutomationComponent } from './featured-component/automation/automation.component';
import { RoutineComponent } from './featured-component/routine/routine.component';
import { DeviceSettingComponent } from './featured-component/devices/device/device-setting/device-setting.component';
import { RolesComponent } from './featured-component/profile/role-components/roles/roles.component';
import { ModeComponent } from './featured-component/mode/mode.component';

// Auth Components
import { AuthComponent } from './auth-components/auth/auth.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:'' ,
    component: DashboardComponent,
    canActivate: [AuthRoute]
  }, 
  {
    path:'auth' ,
    component: AuthComponent
  }, 
  {
    path:'forgot-password' ,
    component: ForgotPasswordComponent
  }, 
  {
    path:'automation' ,
    component: AutomationComponent
  }, 
  {
    path:'routine' ,
    component: RoutineComponent
  },
  {
    path:'mode' ,
    component: ModeComponent
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
  },
  {
    path:'device/:id' ,
    component: DeviceComponent
  },
  {
    path:'device/setting/:id' ,
    component: DeviceSettingComponent
  },
  {
    path:'firmware-update' ,
    component: UpdateComponent
  },
  {
    path:'account-and-security' ,
    component: ProfileComponent
  },
  {
    path:'roles' ,
    component: RolesComponent
  },
  {
    path:'faq' ,
    component: FaqComponent
  },
  {
    path:'feedback' ,
    component: FeedbackComponent
  },
  {
    path:'setting' ,
    component: SettingComponent
  },
  {
    path:'notification' ,
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
