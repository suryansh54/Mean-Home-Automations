import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '@app/app-material.module';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ConfirmationDialogComponent
  ]
})
export class ConfirmationDialogModule { }
