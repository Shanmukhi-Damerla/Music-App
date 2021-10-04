// database/firebaseDb.js

import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCibTZabIcvRrJTBOrBlozQl9fR1lMwqGo",
    authDomain: "signin-1fcca.firebaseapp.com",
    databaseURL: "https://signin-1fcca.firebaseio.com",
    projectId: "signin-1fcca",
    storageBucket: "signin-1fcca.appspot.com",
    messagingSenderId: "922465524257",
    appId: "1:922465524257:web:ff7fa2d0b9195ef4ffe160"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;