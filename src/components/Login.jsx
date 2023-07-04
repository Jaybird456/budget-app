import { auth } from "../config/firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {FaArrowCircleDown} from 'react-icons/fa'

function Login() {

    const navigate = useNavigate();
    const signIn = () =>{
        signInAnonymously(auth).catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        navigate("/home");


    }

  return (
    <div className="m-5 p-5 flex flex-col justify-center items-center h-[550px]">
        <h1 className="p-2 text-center text-5xl text-cream ">Welcome to DollarSense</h1> 
        <div className="text-cream flex flex-row">
          <p className="p-2 pb-4 text-center text-lg">Please sign in below </p>
          <div className="p-2">
            <FaArrowCircleDown size={25} />
          </div>
        </div>
        <button className='border-2 border-cream rounded-full text-cream text-lg p-2' onClick={signIn}>Sign in as Guest</button>
    </div>
  )
}

export default Login