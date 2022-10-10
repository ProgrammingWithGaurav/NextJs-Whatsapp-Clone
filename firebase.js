import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAvOvTyyzilOxnPLD8UbfqWUI5bxjzSLOI",
    authDomain: "react-apps-1abca.firebaseapp.com",
    projectId: "react-apps-1abca",
    storageBucket: "react-apps-1abca.appspot.com",
    messagingSenderId: "54426027347",
    appId: "1:54426027347:web:02c313d0040efe49e0cda6",
    measurementId: "G-XE5YM81KQ8"
  };


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};

// npm install -g firebase-tools
// For hosting the app
// firebase deploy --only hosting:nextjs-whats-app-clone 

// For firebase.json
/*
{
    "hosting": {
      "site": "nextjs-whats-app-clone",
  
      "public": "public",
      ...
    }
  }
*/