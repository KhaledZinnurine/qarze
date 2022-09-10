import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../../firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Navbar = () => {

    const [userInfo, setUserInfo] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let item = JSON.parse(sessionStorage.getItem("userinfo"));
        item?.uid && setUserInfo(item)
        console.log(item)
        item?.uid && setIsLoggedIn(true)
    },[])

    const googleLogIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                setUserInfo(user)
                setIsLoggedIn(true)
                sessionStorage.setItem("userinfo", JSON.stringify(user));
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    console.log(isLoggedIn)

    const googleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("ok done")
            setUserInfo({})
            setIsLoggedIn(false)
            sessionStorage.clear();
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar_bg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* <a class="navbar-brand" to=" ">Qarze Hasana</a> */}
                <Link class="navbar-brand fw-bold fs-3" to="/">Qarze Hasana</Link>
                
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0   display_list">
                        <li class="nav-item">
                            <Link class="nav-link active fs-4 " aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to='/register'>Membership</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/qarze">Qarze Hasana</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/donate">Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/blooddonate">Blood Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active fs-4" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link active fs-4" aria-current="page" to=" " onClick={isLoggedIn ? googleSignOut : googleLogIn}> {isLoggedIn ? <img style={{ borderRadius: 20, height: 50, width: 50 }} src={userInfo?.photoURL} /> : "Login"}</Link>

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
