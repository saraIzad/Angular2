import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
    templateUrl: './app/dashboard/users/dashboard-user.component.html'
})
export class DashboardUserComponent implements OnInit {
    users: User[];
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }
}