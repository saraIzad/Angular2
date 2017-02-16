import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';
//Lazy Loading
//import { AboutModule } from './about/about.module';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { MainUserComponent } from './users/main-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateFormComponent } from './template/template-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';

    
// rxjs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        //AboutModule,
        HttpModule,
        appRouting,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        UserProfileComponent,
        UserFormComponent,
        MainUserComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent,
        TemplateFormComponent,
        ReactiveFormComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
