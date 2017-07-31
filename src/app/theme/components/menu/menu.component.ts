import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from "@angular/material"
@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    constructor() { }

    @Input() rightBar: MdSidenav;
    @Input() leftBar: MdSidenav;

    ngOnInit() { }

    openLeftMenu() {
        if (this.leftBar.opened) {
            this.leftBar.close();
        } else {
            this.leftBar.open();
        }
    }

    openRightMenu() {
        if (this.rightBar.opened) {
            this.rightBar.close();
        } else {
            this.rightBar.open();
        }
    }
}