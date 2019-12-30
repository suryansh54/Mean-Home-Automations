import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  token(email: string, password: string) {
    return this.http.post(environment.apiUrl+"/api/token", {
      email:email, password:password
    })
  }

  
  getToken() {
    return sessionStorage.getItem('token');
  }

  signUp(email: string, password: string) {
    return this.http.post(environment.apiUrl+"/api/register", {
      email:email, password:password
    })
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/auth');
  }

  self(){
    return this.http.get(environment.apiUrl+"/api/user/self");
  }

  isLoggedIn() {
    if (sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/')
      return true;
    }
  }
}
