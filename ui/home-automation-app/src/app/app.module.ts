import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth Module
import { AuthModule } from './auth-components/auth.module'; 

// Fragments Components
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { SidebarComponent } from './fragments/sidebar/sidebar.component';

// Angular Material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

// import services
import { DeviceService } from './services/device.service';
import { AuthService } from './services/auth-services/auth.service';

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
import { MatBadgeModule } from '@angular/material/badge';
import { SettingComponent } from './featured-component/setting/setting.component';
import { NotificationComponent } from './featured-component/notification/notification.component';
import { DeviceComponent } from './featured-component/devices/device/device.component';

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
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatBadgeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [AuthService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
