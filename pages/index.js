import { Login } from '@mui/icons-material';
import Head from 'next/head';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from '../components/Sidebar';
import { auth } from '../firebase';

export default function Home() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      document.title = user.displayName;
    }

  }, [user]);
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user? <Login  /> : (
        <>
      <Sidebar />
        </>
      )}

    </div>
  )
}
