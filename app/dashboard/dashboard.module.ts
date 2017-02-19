import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { dashboardRouting } from './dashboard.routing';
import { UserService } from '../shared/services/user.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardUserComponent } from './users/dashboard-user.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';


@NgModule({
    imports: [
        CommonModule,
        dashboardRouting,
        FormsModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        DashboardUserComponent,
        DashboardUserDetailsComponent,
        DashboardUsersHomeComponent
        ],
    providers: [
        UserService
    ],
})
export class DashboardModule { }
