import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Meteor.startup(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
