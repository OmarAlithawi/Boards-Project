import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMA8yuLruYtyIdLSlViG7fjanf6sbBBG8",
    authDomain: "thinking-hats-17048.firebaseapp.com",
    databaseURL: "https://thinking-hats-17048.firebaseio.com",
    projectId: "thinking-hats-17048",
    storageBucket: "thinking-hats-17048.appspot.com",
    messagingSenderId: "210475250264",
    appId: "1:210475250264:web:fb4942d3acb3be6a05d02d"
};

class Firebase {
  constructor() {
    this.auth = firebase.auth();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  signout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
      email: email,

    });
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  getCurrentUserName() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const newFirebase = new Firebase();
export default newFirebase;
