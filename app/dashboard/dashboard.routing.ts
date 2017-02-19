import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardUserComponent } from './users/dashboard-user.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';

import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuardService } from '../shared/guards/can-deactivate-guad.service';


export const routes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                canActivate: [AuthGuardService],
                component: DashboardComponent,
            },
            {
                path: 'users',
                component: DashboardUserComponent,
                canActivateChild: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: DashboardUserDetailsComponent,
                        canDeactivate: [CanDeactivateGuardService]
                    }
                ]
            }

        ]
    },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);