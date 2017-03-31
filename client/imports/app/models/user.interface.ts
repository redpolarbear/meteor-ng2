export interface User {
  email: string;
  password: string;
  profile: {
    name: {
      first: string,
      last: string
    },
    photoURL: string
  }
}