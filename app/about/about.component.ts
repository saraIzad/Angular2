import { Component, OnInit } from '@angular/core';
import { User, UserReqRes } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';



@Component({
    selector: 'about-page',
    templateUrl: './app/about/about.component.html',
    styles: [`
        .profile-card   {
        background: #f3f3f3;
        border-radius: 4px;
        padding: 30px;
        text-align: center;
        }
        .profile-card img  {
        max-width: 50%;
        margin: 15px auto;
        }
  `]
})
export class AboutComponent implements OnInit {
    users: User[];
    userReqRes: UserReqRes[];
    constructor(private service: UserService) { }

    ngOnInit() {
        //promise
        this.service.getUsers().then(users => this.users = users);
        //observable
        this.service.getUsersReqRes()
            .subscribe(
                users => this.userReqRes = users,
                err=>{
                    //log error, show error
                });


    }
}