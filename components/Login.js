import { Button } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {auth, provider} from '../firebase';

function Login() {
    const router = useRouter();
    const signIn = () => {
        auth.signInWithPopup(provider).then(function(result) {
            router.push('/')
          }).catch(function(error) {
            console.log(error.message)
          })
        
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src='https://cdn-icons-png.flaticon.com/128/1384/1384055.png' alt=''/>
                <Button onClick={signIn} variant='outlined'>Login in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 8px 4px 14px -3px rgba(0,0,0,0.7);
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;

`