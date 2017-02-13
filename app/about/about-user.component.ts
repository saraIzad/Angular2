import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
    templateUrl: "./app/about/about-user.component.html",
    styles: [`
     img  {
      max-width: 300px;
      margin: 20px auto;
    }
  `]
})
export class AboutUserComponent implements OnInit {
    user: User;
    constructor(
        private route: ActivatedRoute,
        private service: UserService,
        private router: Router
    ) { }
    ngOnInit() {
        //grab the current username
        let username = this.route.snapshot.params['username'];

        this.service.getUser(username).then(user => this.user = user);
        console.log(username);
    }

    goBack() {
        //window.history.back();
        this.router.navigate(['/about']);
    }
}