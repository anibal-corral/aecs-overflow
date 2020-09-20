import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./material.modules";

import { QuestionDetailComponent } from "./question/question-detail.component";
import { AnswerComponent } from './answer/answer.component';
import {MomentModule} from 'ngx-moment';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupscreenComponent } from './auth/signupscreen.component';
import { QuestionListComponent } from './question/question-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerComponent,
    SigninScreenComponent,
    SignupscreenComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
