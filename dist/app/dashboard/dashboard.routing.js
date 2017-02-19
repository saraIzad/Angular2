"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_user_component_1 = require("./users/dashboard-user.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
var dashboard_user_details_component_1 = require("./users/dashboard-user-details.component");
var auth_guard_service_1 = require("../shared/guards/auth-guard.service");
var can_deactivate_guad_service_1 = require("../shared/guards/can-deactivate-guad.service");
exports.routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [auth_guard_service_1.AuthGuardService],
                component: dashboard_component_1.DashboardComponent,
            },
            {
                path: 'users',
                component: dashboard_user_component_1.DashboardUserComponent,
                canActivateChild: [auth_guard_service_1.AuthGuardService],
                children: [
                    {
                        path: '',
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: dashboard_user_details_component_1.DashboardUserDetailsComponent,
                        canDeactivate: [can_deactivate_guad_service_1.CanDeactivateGuardService]
                    }
                ]
            }
        ]
    },
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=dashboard.routing.js.map