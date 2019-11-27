import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-automation-app';
  showFragments: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute){
    
  }

  showCommonFragments(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == '/auth' || this.router.url == '/forgot-password') {
          this.showFragments = false;
        } else {
          this.showFragments = true;
        }
      }
    });
  }

  ngOnInit(){
    this.showCommonFragments();
  }

}
