import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fragments/header/header.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { SidebarComponent } from './fragments/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

// Featured Components
import { DashboardComponent } from './featured-component/dashboard/dashboard.component';
import { AddDeviceComponent } from './featured-component/add-device/add-device.component';
import { AboutComponent } from './featured-component/about/about.component';
import { DevicesComponent } from './featured-component/devices/devices.component';
import { UpdateComponent } from './featured-component/update/update.component';
import { ProfileComponent } from './featured-component/profile/profile.component';


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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
