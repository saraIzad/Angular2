import { Component } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector: 'main-user',
    templateUrl: "./app/users/main-user.component.html",
    styleUrls: ['./app/users/main-user.component.css']
})
export class MainUserComponent {
    message: string = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Sara', username: 'sizad', avatar: '' },
        { id: 26, name: 'Alex', username: 'Alexp', avatar: '' },
        { id: 27, name: 'Maria', username: 'mkorolev', avatar: '' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        //console.log(event);
        this.users.push(event.user);
    }
}