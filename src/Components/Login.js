import Header from "./Header"
import '../css/Login.css'
import { Link} from "react-router-dom"
import {useRef, useState } from "react"
import { valiDataform } from '../utills/valiDateform.'
import { auth } from "../utills/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser} from "../utills/userSlice"

const Login = () => {
    const [isSignin, setIsSign] = useState(true);
    const [errorMessage, setErrorMessage] = useState()

    const email = useRef(null)
    const password = useRef(null)
    const dispatch = useDispatch()

    const HandleSignin = () => {
        setIsSign(!isSignin)
    }

  

    const formDatasubmit = () => {
        console.log("email value",email.current.value);
        const checkerrorMessage = valiDataform(auth, email.current.value, password.current.value)
        setErrorMessage(checkerrorMessage)

        if (checkerrorMessage) return;

        if (!isSignin) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    updateProfile(user, {
                        displayName: user.displayName, photoURL: "https://avatars.githubusercontent.com/u/108019517?v=4"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispatch(addUser({ uid: uid, emai: email, displayName: displayName, photoURL: photoURL }))

                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch(() => {
                    const errorCode = "*user not found please check your email or password";
                    setErrorMessage(errorCode)
                });
        }
    }

    return (
        <div className="login flex flex-col items-center h-[100vh]">
            <div className="w-full">
                <Header />
            </div>
            <div className="flex flex-col bg-gray-950/90 rounded  py-24 px-16">
                <form className="flex flex-col item-center justify-center gap-4" onSubmit={((e) => e.preventDefault())}>
                    <h1 className="text-white  text-3xl">{isSignin ? "Sign in" : "Sign up"}</h1>
                    {!isSignin && (
                        <input type="text" placeholder="Full name" className="p-3 outline-none rounded-sm text-white bg-gray-700/40" />
                    )

                    }
                    <input type="email" placeholder="Emai address" className="p-3 outline-none rounded-sm text-white bg-gray-700/40" ref={email} />
                    <input type="password" placeholder="Password" className="p-3 border-1 outline-none rounded-sm text-white bg-gray-700/40" ref={password} />
                    <p className="text-red-600">{errorMessage}</p>
                    <button className="p-3 bg-red-600 text-white  rounded-sm " onClick={formDatasubmit}>{isSignin ? "Sign in" : "Sign up"}</button>
                </form>
                <div className="flex item-center  justify-between">
                    <div className="flex gap-2 ">
                        <input type="checkbox" /><span className="text-white">Remember me</span>
                    </div>
                    <div className="">
                        <Link className="text-white">Need help?</Link>
                    </div>
                </div>

                <div className="text-white flex items-center justify-center p-5 gap-2 ">
                    <span className="text-gray-400">{isSignin ? "New to Netflix?" : "Already have an account?"}</span>
                    <Link onClick={HandleSignin} className="underline">{isSignin ? "Sign up" : "Sign in"}</Link>
                </div>
                <p className=" text-gray-300">
                    This page is protected by Ankit verma
                </p>
            </div>
        </div>
    )
}

export default Login