import {Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{
    // add open
    @HostBinding('class.open') openClass: boolean; //bind to property class and the class is open

    @HostListener('click') onClick() {
        // this.openClass = this.openClass ? false : true;
        this.openClass = !this.openClass //toggle this variable. When its true, itll be false, and if its false, itll be true
    }

    constructor(){ }

    ngOnInit(){
        this.openClass = false;
    }


}