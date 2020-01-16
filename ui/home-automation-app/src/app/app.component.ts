import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFragments: boolean = true;
  theme:string = "light";
  parentMessage: string = "Message from Parent";
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

  

  receiveMessage($event) {
    this.theme = $event
    // console.log($event)
  }
  
  ngDoCheck(){
    // console.log("Console Fron ngDoCheck")
  }
}
