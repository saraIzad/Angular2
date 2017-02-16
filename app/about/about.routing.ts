import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AboutUserComponent } from '../about/about-user.component';
import { AboutSectionComponent } from '../about/about-section.component';
import { AboutUsersResolve } from '../about/about-resolve.service';
import { AboutUserResolve } from '../about/about-user-resolve';



const aboutRoutes: Routes = [
    {
        /* path: 'about',*/
        path: '', /*lazy loading*/
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                /*data:{
                    message : 'here is my message'
                }*/
                resolve: {
                    users: AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: AboutUserComponent,
                resolve:{
                    user : AboutUserResolve
                }
            },

        ]
    }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);