"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var about_component_1 = require("../about/about.component");
var about_user_component_1 = require("../about/about-user.component");
var user_service_1 = require("../shared/services/user.service");
var about_resolve_service_1 = require("../about/about-resolve.service");
var about_user_resolve_1 = require("../about/about-user-resolve");
var about_routing_1 = require("../about/about.routing");
var about_section_component_1 = require("../about/about-section.component");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [
            about_routing_1.aboutRouting,
            common_1.CommonModule,
            http_1.HttpModule
        ],
        declarations: [
            about_component_1.AboutComponent,
            about_user_component_1.AboutUserComponent,
            about_section_component_1.AboutSectionComponent
        ],
        providers: [
            user_service_1.UserService,
            about_resolve_service_1.AboutUsersResolve,
            about_user_resolve_1.AboutUserResolve
        ]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map