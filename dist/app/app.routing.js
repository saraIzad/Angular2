"use strict";
var router_1 = require("@angular/router");
var main_user_component_1 = require("./users/main-user.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var template_form_component_1 = require("./template/template-form.component");
var reactive_form_component_1 = require("./reactive/reactive-form.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    /*  {
          path: 'admin',
          redirectTo: '/',
          pathMatch: 'full'
      },*/
    //lazy loading
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'user', component: main_user_component_1.MainUserComponent },
    { path: 'template', component: template_form_component_1.TemplateFormComponent },
    { path: 'reactive', component: reactive_form_component_1.ReactiveFormComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map