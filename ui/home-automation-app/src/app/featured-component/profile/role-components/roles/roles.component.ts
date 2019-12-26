import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface Roles {
  id: string,
  name: string,
  resources: string,
  status: number
}

const ELEMENT_DATA: Roles[] = [
  { id:'X6YGH8', name: 'Security guard Gate 01', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id:'X6YGH8', name: 'Security guard Gate 02', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id:'X6YGH8', name: 'Security guard Gate 03', resources: '5 Devices, 3 Camera, 1 Lock', status:1 },
  { id:'X6YGH8', name: 'Guest room 01', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id:'X6YGH8', name: 'Security room', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id:'X6YGH8', name: 'Guest room 02', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id:'X6YGH8', name: 'Guest room 03', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id:'X6YGH8', name: 'Guest room 04', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id:'X6YGH8', name: 'Guest room 05', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id:'X6YGH8', name: 'Guest room 06', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 }
];

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  searchStatus: boolean = false;
  constructor() { }
  displayedColumns = ['name', 'resources', 'status', 'edit', 'delete' ];
  dataSource = new MatTableDataSource<Roles>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  search(){
    this.searchStatus = !this.searchStatus;       
}

}
