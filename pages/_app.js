import Login from '../components/Login';
import Loading from '../components/Loading';
import { auth,db } from '../firebase';
import { useEffect } from 'react';
import firebase from 'firebase';

function MyApp({ Component, pageProps }) {
  const user = auth.currentUser;

  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).set({
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL
        },
        {merge: true}
      )}
  }, [user]);

  if(!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp
