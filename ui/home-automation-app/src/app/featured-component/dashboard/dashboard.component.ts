import { Component, OnInit, Inject, ViewChildren, QueryList } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDropList, CdkDragDrop, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';

export interface DialogData {
  animal: string;
  name: string;
}

export interface IWidget {
  color: string;
  cols: number;
  rows: number;
  title: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => { this.loading = false },3000);
  }

  addWidgetDialogEvent(): void {
    const dialogRef = this.dialog.open(AddWidgetDialog, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  entered($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.widgets, $event.item.data, $event.container.data);
    console.log("New Data",this.widgets);
  }

  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  drops: CdkDropList[];

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
      console.log(this.drops);
    })
  }


  widgets: IWidget[] = [
    { title: 'Total Device', cols: 3, rows: 1, color: '#fff' },
    { title: 'Recent history', cols: 3, rows: 1, color: '#fff' },
    { title: 'Up Time', cols: 3, rows: 1, color: '#fff' },
    { title: 'Camera', cols: 3, rows: 1, color: '#fff' },
    { title: 'Important Links', cols: 6, rows: 2, color: '#fff' },
    { title: 'Electricity Used', cols: 3, rows: 1, color: '#fff' },
    { title: 'Routine', cols: 3, rows: 1, color: '#fff' },
    { title: 'Active Device', cols: 3, rows: 1, color: '#fff' },
  ];
}


@Component({
  selector: 'add-widget-modal',
  templateUrl: 'modal/add-widget.modal.html',
})
export class AddWidgetDialog {

  constructor(
    public dialogRef: MatDialogRef<AddWidgetDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
