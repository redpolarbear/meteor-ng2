import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import * as md5 from 'md5';

import template from './signup.component.html';

// models
import { User } from '../models/user.interface';

// providers
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-signup',
  template
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this._buildForm();
  }

  _buildForm() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      lastName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      email: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6)]]
    })
  }
  
  doSignup(formValues: any, isValid: boolean) {
    if (isValid) {
      console.log(formValues);
      let user: User = {
        email: formValues.email,
        password: formValues.password,
        profile: {
          name: {
            first: formValues.firstName,
            last: formValues.lastName
          },
          photoURL: 'https://www.gravatar.com/avatar/' + md5(formValues.email.toLowerCase()) + '?default=mm&s=256'
        }
      };
      this.authService.signUp(user)
        .then( (msg) => {
          console.log('signup Callback', msg);
        })
        .catch ( (error) => {
          console.log(error);
        })
    }
  }

  doLogout() {
    Accounts.logout();
  }
}
