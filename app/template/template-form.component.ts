import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    templateUrl: './app/template/template-form.component.html',
    styleUrls: ['./app/template/template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
    user: User;
    formSubmnitted: boolean = false;
    constructor() { }

    ngOnInit() {
        this.user = {
            username: '',
            name: 'Name',
            id: -1,
            avatar: ''
        };
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }

    processForm() {
        this.formSubmnitted = true;
    }
}