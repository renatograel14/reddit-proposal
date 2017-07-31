import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav, MdDialog } from "@angular/material"
@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
   
})

export class MenuComponent implements OnInit {
    constructor(private dialog: MdDialog) { }
    accent=false;
    @Input() rightBar: MdSidenav;
    @Input() leftBar: MdSidenav;

    ngOnInit() {
        this.accent = true; 
        this.dialog.open(TooltipComponent, {
            position: { top: '60px', left: '10%' },
        })
        this.dialog.afterAllClosed.subscribe(()=>{
            this.accent = false;
        });
    }

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


@Component({
    template: `
        <p> This is Reddit! Please welcome! <br> <span> Change to any subreddit clicking on the logo!</span> </p>
    `
})
export class TooltipComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}