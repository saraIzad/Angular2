import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
    canActivate(){
        console.log("are you logged in?");
        return true;
    }

     canActivateChild(){
        console.log("are you logged in?(Child route)");
        return true;
    }
}