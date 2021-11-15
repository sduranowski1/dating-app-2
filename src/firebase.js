import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyC-dAvKwqzD2_RKcmd6Tazt7leEpOSkT84",
      authDomain: "mymatchseeker.firebaseapp.com",
      projectId: "mymatchseeker",
      storageBucket: "mymatchseeker.appspot.com",
      messagingSenderId: "727548848820",
      appId: "1:727548848820:web:c59b439495d2e4a1c805e1",
      measurementId: "G-QMYDMNC846"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const database = firebaseApp.firestore();

    export default database;