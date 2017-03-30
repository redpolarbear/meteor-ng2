import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import * as _ from 'lodash';
// Component
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookStackComponent } from './book-stack/book-stack.component';
import { FoodStackComponent } from './food-stack/food-stack.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

let components = [
  AppComponent,
  SignupComponent,
  LoginComponent,
  BookStackComponent,
  FoodStackComponent,
  PageNotFoundComponent
];

let pipes = [];

function declarations() {
  return _.concat(components, pipes);
  // return (components);
}

// function entryComponents() {
//   return components;
// }

function providers() {
  return [];
}

@NgModule({
  declarations: declarations(),
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  // entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}