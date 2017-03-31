import { Component, OnInit } from '@angular/core';
import template from './app.component.html';
import { Meteor } from 'meteor/meteor';

import { Tracker } from 'meteor/tracker';

import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  template,
})
export class AppComponent implements OnInit {
  title = 'meteor-ng2 project';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    Tracker.autorun( () => {
      console.log(this.authService.isLoggedIn());
    })
  }


}
