import React from 'react';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {fcGoogle} from 'react-icons/fc';
import favicon from '../assets/favicon.png';
import logo from '../assets/logo.png';
import logoWhite from '../assets/logowhite.png';
import share from '../assets/share.mp4';

const Login = () => {

    const responseGoogle = (response) => {

    }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
           <video src = {share} type = "video/mp4" loop controls = {false} muted autoPlay
           className='w-full h-full object-cover'/>
        </div>
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
            <div className="p-5">
                <img src={logoWhite} alt='petvot-media-logo' width="130px"/>
            </div>
            <div className='shadow-2xl'>
                <GoogleLogin
                clientId=''
                render={(renderprops) => (
                    <button
                    typeof='button'
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                    onClick={renderprops.onClick}
                    disabled={renderprops.disabled}
                    >
                        <fcGoogle className = "mr-4"/> sign in with google 
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
                />
            </div>
        </div>

    </div>
  )
}

export default Login