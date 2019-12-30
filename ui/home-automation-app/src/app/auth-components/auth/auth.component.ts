import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth-services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginLoading: boolean = false;
  signupLoading: boolean = false;

  constructor(public router: Router, public dialog: MatDialog, private auth: AuthService, private _snackBar: MatSnackBar) { }

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  openSnackbar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  forgetPasswordDialogEvent(): void {
    const dialogRef = this.dialog.open(ForgetPasswordDialog, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  token(email: string, password: string) {
    this.auth.token(email, password).subscribe((data: any) => {
      sessionStorage.setItem('token', data.token);
      this.loginLoading = false;
      this.signupLoading = false;
      if (sessionStorage.getItem('token')) {
        this.router.navigateByUrl('/')
      }
    }, error => {
      this.loginLoading = false;
      this.signupLoading = false;
      if (error.status === 400) {
        this.openSnackbar(error.error.message, "Close", 5000)
      }
    })
  }

  login() {
    this.loginLoading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.token(email, password);
  }

  signup() {
    this.signupLoading = true;
    let email = this.signUpForm.value.email;
    let password = this.signUpForm.value.password;
    this.auth.signUp(email, password).subscribe((data: any) => {
      this.signupLoading = false;
      if (data.user) {
        this.openSnackbar("Welcome! You are successfully registered", "Close", 5000)
        this.token(email, password);
      }
    }, error => {
      this.signupLoading = false;
      if (error.status === 400) {
        this.openSnackbar(error.error.message, "Close", 5000)
      }
    })
  }

  ngOnInit() {
    this.auth.isLoggedIn()
  }

}

@Component({
  selector: 'forget-password-modal',
  templateUrl: 'modal/forget-password.modal.html',
})
export class ForgetPasswordDialog {

  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}