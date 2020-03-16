import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ConfirmationDialogComponent } from '../../shared-modules/confirmation-dialog/confirmation-dialog.component';

const CONFIRMATION_POPUP_WIDTH = '550px';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public openConfirmationDialog(data: any): any {
    if (!data) {
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = CONFIRMATION_POPUP_WIDTH;
    dialogConfig.data = data;
    // Open confirmation dialog
    return this.dialog.open(ConfirmationDialogComponent, dialogConfig);
  }
}
