import firebase from 'firebase/app'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyBQyA9fXQjgZMgesegWpybcsg_gTL9hgNo",
  authDomain: "sun-pwa.firebaseapp.com",
  databaseURL: "https://sun-pwa.firebaseio.com",
  projectId: "sun-pwa",
  storageBucket: "",
  messagingSenderId: "159896112681",
  appId: "1:159896112681:web:bedc6f2782ea0ecc"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


export { firebase };