import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';


 var firebaseConfig = {
    apiKey: "AIzaSyCYVPF76uDp25ySsR0KyAlrQCyyfO1Hm5U",
    authDomain: "boardproject-5dc24.firebaseapp.com",
    databaseURL: "https://boardproject-5dc24.firebaseio.com",
    projectId: "boardproject-5dc24",
    storageBucket: "boardproject-5dc24.appspot.com",
    messagingSenderId: "418721418095",
    appId: "1:418721418095:web:2f1c4e031acce214c1369a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const dbs = firebase.firestore()
  export default dbs;