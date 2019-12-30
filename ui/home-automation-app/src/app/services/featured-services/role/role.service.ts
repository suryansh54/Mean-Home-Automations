import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface Role {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private router: Router, private http: HttpClient) { }

  createRole(roleObj: Role) {
    let RoleName = roleObj.name;
    return this.http.post(environment.apiUrl+"/api/role", {
      RoleName: RoleName
    })
  }

  updateRole() {

  }

  deleteRole() {

  }

  roleList() {
    return this.http.get(environment.apiUrl+"/api/role/all");
  }
}
