import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <!-- <side-navbar></side-navbar> -->
    
  
  <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-seeNet';
}
