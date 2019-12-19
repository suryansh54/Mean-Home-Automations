import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private router: Router, private routes: ActivatedRoute) { 
    router.events.subscribe((url:any) => url);
  }

  ngOnInit() {
    /* this.router.events.subscribe((data)=>{
      console.log(data.url);
    }) */
  }

}
