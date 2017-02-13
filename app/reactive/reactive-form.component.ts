import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './app/reactive/reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
    form: FormGroup;
    constructor(private fromBuilder: FormBuilder) { }

    ngOnInit() {
        //build the form here
        /*  this.form = new FormGroup({
              name: new FormControl(''),
              username: new FormControl('')
          });*/

        //building the form using the form builder
        this.form = this.fromBuilder.group({
            name: [''],
            username: ['']
        });

        console.log(this.form);
    }

    processForm() {
        console.log("processing", this.form.value);
    }
}