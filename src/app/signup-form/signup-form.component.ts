// signup-form.component.ts
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'signup-form',
	templateUrl: 'signup-form.component.html'
})
export class SignupFormComponent {

	myFormGroup;

	constructor() {
		this.myFormGroup = new FormGroup({
			name: new FormControl(),
			age: new FormControl()
		});
	}
}
