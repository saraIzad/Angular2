import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AboutUserComponent } from '../about/about-user.component';
import { AboutSectionComponent } from '../about/about-section.component';


const aboutRoutes: Routes = [
    {
       /* path: 'about',*/       
        path:'', /*lazy loading*/
        component: AboutSectionComponent,
        children: [
            { path: '', component: AboutComponent },
            { path: ':username', component: AboutUserComponent },

        ]
    }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);