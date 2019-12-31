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
import { RoleComponent } from './featured-component/profile/role-components/roles/role/role.component';

// Auth Components
import { AuthComponent } from './auth-components/auth/auth.component';

const routes: Routes = [
  {
    path:'' ,
    component: DashboardComponent,
    canActivate: [AuthRoute]
  }, 
  {
    path:'auth',
    component: AuthComponent
  }, 
  {
    path:'automation',
    component: AutomationComponent,
    canActivate: [AuthRoute]
  }, 
  {
    path:'routine',
    component: RoutineComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'mode',
    component: ModeComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'add-device',
    component: AddDeviceComponent,
    canActivate: [AuthRoute]
  }, 
  {
    path:'about',
    component: AboutComponent,
    canActivate: [AuthRoute]
  }, 
  {
    path:'group',
    component: GroupComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'devices',
    component: DevicesComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'device/:id',
    component: DeviceComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'device/setting/:id',
    component: DeviceSettingComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'firmware-update',
    component: UpdateComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'account-and-security',
    component: ProfileComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'role',
    component: RolesComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'role/:id/:activeTabId',
    component: RoleComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'faq',
    component: FaqComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'feedback',
    component: FeedbackComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'setting',
    component: SettingComponent,
    canActivate: [AuthRoute]
  },
  {
    path:'notification',
    component: NotificationComponent,
    canActivate: [AuthRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
