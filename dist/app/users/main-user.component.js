"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MainUserComponent = (function () {
    function MainUserComponent() {
        this.message = 'Hello!';
        this.users = [
            { id: 25, name: 'Sara', username: 'sizad', avatar: '' },
            { id: 26, name: 'Alex', username: 'Alexp', avatar: '' },
            { id: 27, name: 'Maria', username: 'mkorolev', avatar: '' }
        ];
    }
    MainUserComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    MainUserComponent.prototype.onUserCreated = function (event) {
        //console.log(event);
        this.users.push(event.user);
    };
    return MainUserComponent;
}());
MainUserComponent = __decorate([
    core_1.Component({
        selector: 'main-user',
        templateUrl: "./app/users/main-user.component.html",
        styleUrls: ['./app/users/main-user.component.css']
    })
], MainUserComponent);
exports.MainUserComponent = MainUserComponent;
//# sourceMappingURL=main-user.component.js.map