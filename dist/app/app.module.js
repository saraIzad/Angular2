"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var auth_guard_service_1 = require("./shared/guards/auth-guard.service");
var can_deactivate_guad_service_1 = require("./shared/guards/can-deactivate-guad.service");
//Lazy Loading
//import { AboutModule } from './about/about.module';
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var user_profile_component_1 = require("./users/user-profile.component");
var user_form_component_1 = require("./users/user-form.component");
var main_user_component_1 = require("./users/main-user.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var template_form_component_1 = require("./template/template-form.component");
var reactive_form_component_1 = require("./reactive/reactive-form.component");
// rxjs
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/observable/throw");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            //AboutModule,
            http_1.HttpModule,
            app_routing_1.appRouting,
            dashboard_module_1.DashboardModule
        ],
        declarations: [
            app_component_1.AppComponent,
            user_profile_component_1.UserProfileComponent,
            user_form_component_1.UserFormComponent,
            main_user_component_1.MainUserComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            not_found_component_1.NotFoundComponent,
            template_form_component_1.TemplateFormComponent,
            reactive_form_component_1.ReactiveFormComponent
        ],
        providers: [
            auth_guard_service_1.AuthGuardService,
            can_deactivate_guad_service_1.CanDeactivateGuardService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map