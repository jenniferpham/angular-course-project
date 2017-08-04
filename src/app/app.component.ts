import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentRoute: string = 'Recipes';

  onRouteChange(customEvent: string){
    this.currentRoute = customEvent;
  }
}
