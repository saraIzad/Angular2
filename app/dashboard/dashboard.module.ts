import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { DashboardUserComponent } from './users/dashboard-user.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';


@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        DashboardUserComponent,
        DashboardUserDetailsComponent,
        DashboardUsersHomeComponent
        ],
    providers: [],
})
export class DashboardModule { }
