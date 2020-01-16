import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../services/auth-services/auth.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() childMessage: string;

  constructor(public dialog: MatDialog, private auth: AuthService) {
    // console.log("Console from Constructor");
   }
  theme: string = "light";
  @Output() messageEvent = new EventEmitter<string>();
  
  ngOnInit() {
    // console.log("Console from ngOnInit");
    this.messageEvent.emit(this.theme);
    // console.log(this.childMessage)
  }

  selectTheme(event) {
    this.messageEvent.emit(event.value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModeModal, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    this.auth.logout()
  }
  
}


@Component({
  selector: 'mode-modal',
  templateUrl: 'modal/mode.modal.html',
})
export class ModeModal {

  constructor(
    public dialogRef: MatDialogRef<ModeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}