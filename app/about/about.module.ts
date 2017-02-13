import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AboutComponent } from '../about/about.component';
import { AboutUserComponent } from '../about/about-user.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from '../about/about.routing';
import { AboutSectionComponent } from '../about/about-section.component';



@NgModule({
    imports: [
        aboutRouting,
        CommonModule,
        HttpModule
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers: [
        UserService
    ]
})
export class AboutModule { }