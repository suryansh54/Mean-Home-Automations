import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Modes {
  id: string,
  name: string,
  resources: string,
  saving: number
}

const MODE_DATA: Modes[] = [
  { id: 'X6YGH8', name: 'Eco Mode', resources: '5 Devices, 3 Camera, 1 Lock', saving: 10 },
  { id: 'X6YGH8', name: 'Default Mode', resources: '5 Devices, 3 Camera, 1 Lock', saving: 0 },
  { id: 'X6YGH8', name: 'Mode 01', resources: '5 Devices, 3 Camera, 1 Lock', saving: 50 },
  { id: 'X6YGH8', name: 'Mode 02', resources: '5 Devices, 3 Camera, 1 Lock', saving: 5 }
];

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {

  searchStatus: boolean = false;
  constructor(public dialog: MatDialog) { }
  displayedColumns = ['name', 'resources', 'status', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<Modes>(MODE_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  search() {
    this.searchStatus = !this.searchStatus;
  }


  createMode(): void {
    const dialogRef = this.dialog.open(CreateModeModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteMode(): void {
    const dialogRef = this.dialog.open(DeleteModeModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'create-mode-modal',
  templateUrl: 'modal/create-mode.modal.html',
})

export class CreateModeModal {

  constructor(
    public dialogRef: MatDialogRef<CreateModeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addRole(roleName: string) {
    console.log(roleName);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'delete-mode-modal',
  templateUrl: 'modal/delete-mode.modal.html',
})

export class DeleteModeModal {

  constructor(
    public dialogRef: MatDialogRef<DeleteModeModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}