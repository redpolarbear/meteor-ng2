import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import * as md5 from 'md5';

import template from './signup.component.html';

// models
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  template
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._buildForm();
  }

  _buildForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6)]]
    })
  }
  
  doSignup(user: User, isValid: boolean) {
    if (isValid) {
      console.log(user);
      let email = user.email.trim();
      let password = user.password.trim();
      let profile = {
        photoURL: 'https://www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?default=mm&s=256'
      }
      Accounts.createUser({ email, password, profile }, (error) => {
        console.log('Signup Callback', error);
      })
    }
  }

  doLogout() {
    Accounts.logout();
  }
}
