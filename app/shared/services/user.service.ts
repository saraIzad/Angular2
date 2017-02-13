import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User, UserReqRes } from '../models/user';
import { Observable } from 'rxjs/Observable';


const usersPromise: Promise<User[]> = Promise.resolve([
    { id: 1, name: 'Sara', username: 'sara_izad', avatar: 'https://pbs.twimg.com/profile_images/825387610780602368/-Vc0Kdlk_bigger.jpg' },
    { id: 2, name: 'Alex', username: 'AArzaghi', avatar: 'https://pbs.twimg.com/profile_images/825386042190594049/YmZNoeU8_400x400.jpg' },
    { id: 3, name: 'Maria', username: 'mkorolev', avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg' }
]);

@Injectable()

export class UserService {

    private ApiUrl: string = "https://reqres.in/api/users";
    constructor(private http: Http) { }

    //getALLUsers
    getUsers() {
        return usersPromise;
    }
    //get Specific user
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username == username));
        /*let user =usersPromise.then(users=>{
            return users.find(user=>{
                return user.username === username;
            });
        });
        return user;*/
    }

    getUsersReqRes(): Observable<UserReqRes[]> {
        return this.http.get(this.ApiUrl)
            .map(res => res.json().data)
            .catch(this.handleError);

    }

    /*
    *Get a single user
    */
    getReqResUser(): Observable<UserReqRes> {
        return this.http.get(this.ApiUrl + "sdsd")
            .map(data => data.json().data)
            .catch(this.handleError);
    }

    /**
     * Handle any error from the API
     */
    private handleError(err) {
        let errorMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errorMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }
        else {
            errorMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errorMessage);
        // return Observable.throw(err.json().data || 'server error');
    }


}
