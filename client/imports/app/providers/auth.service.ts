import { Injectable } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from '../models/user.interface';

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {}

  signUp(user: User) {
    return new Promise ( (resolve, reject) => {
      Accounts.createUser(user, (error) => {
        if (error) {
          reject(error.reason);
        } else {
          this.loggedIn = true;
          resolve(`Hey ${user.profile.name.first}, Welcome!`);
        }
      })
    })
  }

  logIn(user) {
    
  }

  isLoggedIn() {
    return this.loggedIn;
  }



}
