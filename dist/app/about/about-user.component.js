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
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        //grab the current username
        /* let username = this.route.snapshot.params['username'];
 
         this.service.getUser(username).then(user => this.user = user);
         console.log(username);*/
        var _this = this;
        //using the router and resolve instead of the service above
        this.route.data.forEach(function (data) {
            _this.user = data.user;
        });
    };
    AboutUserComponent.prototype.goBack = function () {
        //window.history.back();
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/about/about-user.component.html",
        styles: ["\n     img  {\n      max-width: 300px;\n      margin: 20px auto;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_service_1.UserService,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map