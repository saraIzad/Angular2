"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var usersPromise = Promise.resolve([
    { id: 1, name: 'Sara', username: 'sara_izad', avatar: 'https://pbs.twimg.com/profile_images/825387610780602368/-Vc0Kdlk_bigger.jpg' },
    { id: 2, name: 'Alex', username: 'AArzaghi', avatar: 'https://pbs.twimg.com/profile_images/825386042190594049/YmZNoeU8_400x400.jpg' },
    { id: 3, name: 'Maria', username: 'mkorolev', avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg' }
]);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.ApiUrl = "https://reqres.in/api/users";
    }
    //getALLUsers
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    //get Specific user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username == username; }); });
        /*let user =usersPromise.then(users=>{
            return users.find(user=>{
                return user.username === username;
            });
        });
        return user;*/
    };
    UserService.prototype.getUsersReqRes = function () {
        return this.http.get(this.ApiUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    /*
    *Get a single user
    */
    UserService.prototype.getReqResUser = function () {
        return this.http.get(this.ApiUrl + "sdsd")
            .map(function (data) { return data.json().data; })
            .catch(this.handleError);
    };
    /**
     * Handle any error from the API
     */
    UserService.prototype.handleError = function (err) {
        var errorMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errorMessage = err.status + " - " + err.statusText + " || ''} " + error;
        }
        else {
            errorMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errorMessage);
        // return Observable.throw(err.json().data || 'server error');
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map