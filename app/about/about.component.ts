import { Component, OnInit } from '@angular/core';
import { User, UserReqRes } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';



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
    constructor(private service: UserService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //promise
        //this.service.getUsers().then(users => this.users = users);
        //using resolve instead of promise/observable
        this.activatedRoute.data.forEach((data: {users: User[]}) => {
            //console.log(data);
           this.users = data.users;
        });
        //observable
        this.service.getUsersReqRes()
            .subscribe(
            users => this.userReqRes = users,
            err => {
                //log error, show error
            });

        /* this.activatedRoute.data.forEach(data => {
             console.log(data);
         });*/


    }
}