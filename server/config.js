

const firebase = require('firebase/app');
require('firebase'); 
// Ensure Firestore is required
//below is this firebase congif
const firebaseConfig = {
    apiKey: "AIzaSyA6VlTl_NyGgwW8FypaHd4d2GqNIOE99yQ",
    authDomain: "testproject-6bf05.firebaseapp.com",
    projectId: "testproject-6bf05",
    storageBucket: "testproject-6bf05.appspot.com",
    messagingSenderId: "78857576615",
    appId: "1:78857576615:web:af4566fefdde6c1974bb82",
    measurementId: "G-6B4Y8064CV"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('Users');
module.exports = User;
//here i am exporting the collection made in my databse to app.js in ordeer to add data

