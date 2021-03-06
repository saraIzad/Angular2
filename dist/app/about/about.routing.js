"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("../about/about.component");
var about_user_component_1 = require("../about/about-user.component");
var about_section_component_1 = require("../about/about-section.component");
var about_resolve_service_1 = require("../about/about-resolve.service");
var about_user_resolve_1 = require("../about/about-user-resolve");
var aboutRoutes = [
    {
        /* path: 'about',*/
        path: '',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent,
                /*data:{
                    message : 'here is my message'
                }*/
                resolve: {
                    users: about_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_1.AboutUserResolve
                }
            },
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map