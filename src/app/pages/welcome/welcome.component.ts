import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
	animations: [
		trigger('flyInOut', [
			transition(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)')
			]),
		])
	]
})

export class WelcomeComponent implements OnInit {
	public openLoginForm: boolean;
	public register: boolean;
	constructor() { }

	ngOnInit() {
		this.openLoginForm = false;
		this.register = false;
	}
}