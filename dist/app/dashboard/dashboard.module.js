"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_routing_1 = require("./dashboard.routing");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_user_component_1 = require("./users/dashboard-user.component");
var dashboard_user_details_component_1 = require("./users/dashboard-user-details.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dashboard_routing_1.dashboardRouting
        ],
        exports: [],
        declarations: [
            dashboard_component_1.DashboardComponent,
            dashboard_user_component_1.DashboardUserComponent,
            dashboard_user_details_component_1.DashboardUserDetailsComponent,
            dashboard_users_home_component_1.DashboardUsersHomeComponent
        ],
        providers: [],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map