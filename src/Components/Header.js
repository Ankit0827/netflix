import Netflixlogo from '../assets/Netflix_logo.png'
import { signOut,onAuthStateChanged } from "firebase/auth";
import {auth}  from '../utills/firebase'
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utills/userSlice';

const Header=()=>{


  const navigate=useNavigate()

  const user=useSelector((store)=> store.user)

  const dispatch=useDispatch()

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, emai:email ,displayName:displayName,photoURL:photoURL}))
        navigate("/browser")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
  })
    return(
        <div className='flex items-center justify-between pr-2 bg-gradient-to-b from-black'>
          <img src={Netflixlogo} alt='netflix-logo' className='w-36 p-2 '/>
          {user &&
          <div className='flex items-center gap-2'>
             <div className='w-6 rounded'>
              <img src={user.photoURL} alt='icon' className='rounded-full'/>
             </div>
             <div>
              <button className='font-bold text-white'onClick={handleSignout}>Sign out</button>
             </div>
          </div>
         }
        </div>
    )
}

export default Header