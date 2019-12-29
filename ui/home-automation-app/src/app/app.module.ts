import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { FileUploadModule } from 'ng2-file-upload';

// Auth Module
import { AuthModule } from './auth-components/auth.module'; 

// Fragments Components
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { SidebarComponent } from './fragments/sidebar/sidebar.component';

// Angular Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgetPasswordDialog } from './auth-components/auth/auth.component';

// import services
import { DeviceService } from './services/fragments_services/device.service';
import { AuthService } from './services/auth-services/auth.service';
import { LocationService } from './services/location.service';
import { WifiService } from './services/machine-service/wifi.service';
import { TokenInterceptorService } from './services/auth-services/token-interceptor.service';

// Modal Import 
import { CreateRoutineModal } from './featured-component/routine/routine.component';
import { CreateGroupModal } from './featured-component/group/group.component';
import { CreateAutomationModal } from './featured-component/automation/automation.component';
import { AddDeviceModal } from './featured-component/add-device/add-device.component';
import { ModeModal } from './fragments/header/header.component';
import { RemoveDeviceModal } from './featured-component/devices/device/device-setting/device-setting.component';
import { ProfileImageModal } from './featured-component/profile/profile.component';
import { CreateRoleModal } from './featured-component/profile/role-components/roles/roles.component';
import { DeleteRoleModal } from './featured-component/profile/role-components/roles/roles.component';
import { CreateModeModal } from './featured-component/mode/mode.component';
import { DeleteModeModal } from './featured-component/mode/mode.component';

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
import { SettingComponent } from './featured-component/setting/setting.component';
import { NotificationComponent } from './featured-component/notification/notification.component';
import { DeviceComponent } from './featured-component/devices/device/device.component';
import { AutomationComponent } from './featured-component/automation/automation.component';
import { RoutineComponent } from './featured-component/routine/routine.component';
import { BreadcrumbComponent } from './fragments/breadcrumb/breadcrumb.component';
import { DeviceSettingComponent } from './featured-component/devices/device/device-setting/device-setting.component';
import { CameraComponent } from './featured-component/devices/device/camera/camera.component';
import { RolesComponent } from './featured-component/profile/role-components/roles/roles.component';
import { ModeComponent } from './featured-component/mode/mode.component';
import { RoleComponent } from './featured-component/profile/role-components/roles/role/role.component';

const modals = [ForgetPasswordDialog, CreateModeModal, DeleteModeModal, CreateRoleModal, DeleteRoleModal, CreateRoutineModal, CreateGroupModal, CreateAutomationModal, ModeModal, AddDeviceModal, RemoveDeviceModal, ProfileImageModal]
const matModules = [MatSnackBarModule, MatSidenavModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatRippleModule, MatBadgeModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatDatepickerModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatTooltipModule, MatSelectModule, MatRadioModule, DragDropModule, MatDialogModule, MatProgressSpinnerModule, MatTableModule, MatBottomSheetModule, MatNativeDateModule]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AddDeviceComponent,
    AboutComponent,
    DevicesComponent,
    UpdateComponent,
    ProfileComponent,
    GroupComponent,
    FaqComponent,
    FeedbackComponent,
    SettingComponent,
    NotificationComponent,
    DeviceComponent,
    AutomationComponent,
    RoutineComponent,
    BreadcrumbComponent,
    DeviceSettingComponent,
    CameraComponent,
    ...modals,
    RolesComponent,
    ModeComponent,
    RoleComponent // Import all modal
  ],
  entryComponents: [
    ...modals // Import all modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxContentLoadingModule,
    FileUploadModule,
    ...matModules // Mat Modules
  ],
  providers: [
    AuthService, 
    DeviceService, 
    LocationService, 
    WifiService, 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
}
