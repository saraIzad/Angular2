import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User, UserReqRes } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';



@Injectable()
export class AboutUsersResolve implements Resolve<User> {

    constructor(private service: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.service.getUsers().then(users => users);
    }

}