import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Auth Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
