import { Meteor } from 'meteor/meteor';
import { signupPromise } from './signup';

Meteor.methods({
  'user.createAccount': function(user) {
    return signupPromise(user)
      .then( (response) => {
        return response;
      })
      .catch( (error) => {
        throw new Meteor.Error('500', error);
      })
  }
})


Meteor.startup(() => {
  // code to run on server at startup
  console.log('object');
});
