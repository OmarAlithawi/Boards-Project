import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYVPF76uDp25ySsR0KyAlrQCyyfO1Hm5U",
  authDomain: "boardproject-5dc24.firebaseapp.com",
  databaseURL: "https://boardproject-5dc24.firebaseio.com",
  projectId: "boardproject-5dc24",
  storageBucket: "boardproject-5dc24.appspot.com",
  messagingSenderId: "418721418095",
  appId: "1:418721418095:web:2f1c4e031acce214c1369a",
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
