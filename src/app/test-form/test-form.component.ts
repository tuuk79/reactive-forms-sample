import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from '../models/address';

@Component({
	selector: 'app-test-form',
	templateUrl: './test-form.component.html',
	styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
	myTestForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.myTestForm = this.fb.group({
			info: this.fb.control('', Validators.required),
			address: this.fb.group(new Address())
		});
	}

	ngOnInit() {
	}

}
