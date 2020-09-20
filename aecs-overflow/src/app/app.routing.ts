//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionListComponent} from './question/question-list.component';
import {SigninScreenComponent} from './auth/signin-screen.component';
import {SignupscreenComponent} from './auth/signupscreen.component';
const APP_ROUTES: Routes = [
  {path: '', component:QuestionListComponent, pathMatch:'full'},
  {path:'signin', component:SigninScreenComponent},
  {path:'signup', component:SignupscreenComponent}


];

export const Routing = RouterModule.forRoot(APP_ROUTES);
