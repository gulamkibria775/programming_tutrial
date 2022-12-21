import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { FaGoogle, FaGithub } from "react-icons/fa";

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider= new GithubAuthProvider();
    const auth=getAuth()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn=() =>{
      signInWithPopup(auth,githubProvider)
      .then(result =>{
        const user=result.user
      })
    }

    return (
        <div className='float-end'>
            <div className='me-5 mb-3'>
                <Button onClick={handleGoogleSignIn} className="me-2"  variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </div>
           
        </div>
    );
};

export default RightSideNav;