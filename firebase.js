import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCn_AIoIGDpuoROIe3Ba8li33heu4FQ0Rw",
  authDomain: "nextjsapps-366215.firebaseapp.com",
  projectId: "nextjsapps-366215",
  storageBucket: "nextjsapps-366215.appspot.com",
  messagingSenderId: "895482855029",
  appId: "1:895482855029:web:18f922f36363259a7d823c",
  measurementId: "G-6RHHXLBVQE"
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
