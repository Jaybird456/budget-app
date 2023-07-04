import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from "../config/firebase";
import {IoIosAdd} from 'react-icons/io';

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user &&
        (
          <div className="flex justify-between m-auto md:w-[80%]">
            <Link className="m-3 mx-4 p-2 text-cream font-bold font-['Lobster'] text-3xl" to="/home">DS</Link>
            <Link className="m-3 mx-4 p-3 text-cream font-bold text-3xl" to="/add"><IoIosAdd /></Link>
          </div>
        ) 
      }
    </div>
  )
}

export default NavBar