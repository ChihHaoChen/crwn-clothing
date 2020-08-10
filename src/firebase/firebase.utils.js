import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8GGIr3aPjn7Ix78B9FgqXlli105-Z9Io",
  authDomain: "crwn-db-8a2f6.firebaseapp.com",
  databaseURL: "https://crwn-db-8a2f6.firebaseio.com",
  projectId: "crwn-db-8a2f6",
  storageBucket: "crwn-db-8a2f6.appspot.com",
  messagingSenderId: "289972572447",
  appId: "1:289972572447:web:d60e6130bd6ac1af6d202a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;