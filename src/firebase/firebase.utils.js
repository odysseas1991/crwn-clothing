import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBaNUvPwRQ_bvWL3Fgp-E9SSwUlAHBt7yY',
  authDomain: 'crwn-db-52fb3.firebaseapp.com',
  databaseURL: 'https://crwn-db-52fb3.firebaseio.com',
  projectId: 'crwn-db-52fb3',
  storageBucket: 'crwn-db-52fb3.appspot.com',
  messagingSenderId: '987943277176',
  appId: '1:987943277176:web:a8e3cef5bc60724f07938d',
  measurementId: 'G-PX8JSX9J31'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();

//Specify additional custom OAuth provider parameters that you want to send with the OAuth request.
provider.setCustomParameters({ prompt: 'select_account' });

//Authenticate with Firebase using the Google provider object. You can prompt your users to sign in with
//their Google Accounts either by opening a pop-up window or by redirecting to the sign-in page.
//To sign in with a pop-up window, call signInWithPopup.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
