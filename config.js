import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWCKiJ1iXqY5IXn55pjo0h8P_iHGMY_As",
  authDomain: "society-manager-app.firebaseapp.com",
  projectId: "society-manager-app",
  storageBucket: "society-manager-app.appspot.com",
  messagingSenderId: "777539271686",
  appId: "1:777539271686:web:fb4365c009459b2ea81787"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore;