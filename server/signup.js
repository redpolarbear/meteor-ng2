import { Accounts } from 'meteor/accounts-base';

let handleSignup;

let signup = ( options, promise ) => {
  handleSignup = promise;

  let userId    = _createAccount( options ),
      firstName = options.profile.name.first;

  handleSignup.response( `Hey ${ firstName }, welcome!` );
};

let _createAccount = ( user ) => {
  try {
    return Accounts.createUser( user );
  } catch ( exception ) {
    handleSignup.error( `[Accounts] ${ exception }` );
  }
};

export function signupPromise( options ) {
  return new Promise( ( resolve, reject ) => {
    signup( options, { response: resolve, error: reject } );
  });
}