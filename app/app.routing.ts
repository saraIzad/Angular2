import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainUserComponent } from './users/main-user.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateFormComponent } from './template/template-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    /*  {
          path: 'admin',
          redirectTo: '/',
          pathMatch: 'full'
      },*/
    //lazy loading
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },

    { path: 'contact', component: ContactComponent },
    { path: 'user', component: MainUserComponent },
    { path: 'template', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: '**', component: NotFoundComponent }

];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);