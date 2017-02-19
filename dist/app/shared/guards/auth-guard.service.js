"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthGuardService = (function () {
    function AuthGuardService() {
    }
    AuthGuardService.prototype.canActivate = function () {
        console.log("are you logged in?");
        return true;
    };
    AuthGuardService.prototype.canActivateChild = function () {
        console.log("are you logged in?(Child route)");
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    core_1.Injectable()
], AuthGuardService);
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map