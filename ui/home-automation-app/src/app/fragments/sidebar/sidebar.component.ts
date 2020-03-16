import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-services/auth.service';
import { DialogService } from '../../services/global/dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.userSelfInformation();
  }

  logout() {
    this.auth.logout();
  }

  userSelfInformation() {
    this.auth.self().subscribe(user => {
      console.log('Sidebar hit', user);
    }, error => {
      console.log('Error', error);
    });
  }

  addCustomMenu() {
    const data = {
      confirmationButtonText: 'Hello1',
      message: 'Hello2',
      title: 'Hello3',
      type: 'Hello4'
    };
    const dialogRef = this.dialogService.openConfirmationDialog(data);
  }
}
