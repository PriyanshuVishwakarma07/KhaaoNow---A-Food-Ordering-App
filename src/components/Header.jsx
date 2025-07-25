import { BsCart4 } from "react-icons/bs";
import { assets } from '../assets/assets'
import {useState} from "react"
import {Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
  const [login, setLogin] = useState(true)
  const OnlineStatus = useOnlineStatus();
  const navColor = (e) =>{
    return [
      e.isActive ? "text-red-300 font-bold" : "text-black",
      e.isActive ? "border-b-2 border-red-300" : "",
    ].join(" ")
  }
  return(
    <div className="w-full h-18 flex items-center justify-evenly bg-zinc-50 px-4 shadow-lg">
      <div className="h-full">
        <Link to='/'><img className='h-[90%]' src={assets.Logo} alt="App Logo" /></Link>
      </div>
      <div className="w-[40%]">
        <ul className="flex items-center justify-around list-none font-semibold">
          <li><NavLink className={navColor} to="/">Home</NavLink></li>
          <li><NavLink className={navColor} to="/about">About</NavLink></li>
          <li><NavLink className={navColor} to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="text-[20px] ">
        <BsCart4 />
      </div>
      {OnlineStatus ? <h4 className="text-green-500">🟢 Online</h4> : <h4 className="text-red-500">🔴 Offline</h4>}
      <div>
        <button className="py-2 px-4 bg-red-300 rounded" onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"}</button>
      </div>
    </div>
  )
}

export default Header