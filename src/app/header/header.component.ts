import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('routeChange') currentRoute: EventEmitter <string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNavChange(linkName: string){
    this.currentRoute.emit(linkName)
  }

}
