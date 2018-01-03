import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-test-form',
	templateUrl: './test-form.component.html',
	styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
	myTestForm: FormGroup;

	constructor() {
		this.myTestForm = new FormGroup({
			info: new FormControl()
		});
	}

	ngOnInit() {
	}

}
