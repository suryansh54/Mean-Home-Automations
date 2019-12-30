import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userSelfInformation();
  }

  logout() {
    this.auth.logout()
  }

  userSelfInformation() {
    this.auth.self().subscribe(user=>{
      console.log("Sidebar hit", user)
    }, error => {
      console.log("Error", error)
    })
  }
}
