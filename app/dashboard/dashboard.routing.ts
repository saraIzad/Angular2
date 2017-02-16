import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardUserComponent } from './users/dashboard-user.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';


export const routes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'users',
                component: DashboardUserComponent,
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: DashboardUserDetailsComponent
                    }
                ]
            }

        ]
    },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);