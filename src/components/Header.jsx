import { BsCart4 } from "react-icons/bs";
import { assets } from '../assets/assets'
import {useState} from "react"
import {Link, NavLink } from "react-router-dom";

const Header = () =>{
  const [login, setLogin] = useState(true)

  const navColor = (e) =>{
    return {
      color : e.isActive ? "white" : "black",
      fontWeight: e.isActive ? "bold" : "normal",
      textDecoration: e.isActive ? "underline" : "none",
    }
  }
  return(
    <div className="header">
      <div className="logo-container">
        <Link to='/'><img className='logo' src={assets.Logo} alt="App Logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <NavLink style={navColor} to="/"><li>Home</li></NavLink>
          <NavLink style={navColor} to="/about"><li>About</li></NavLink>
          <NavLink style={navColor} to="/contact"><li>Contact</li></NavLink>
        </ul>
      </div>
      <div className="cart-icon">
        <BsCart4 />
      </div>
      <div className="login">
        <button onClick={()=>setLogin(!login)}>{login ? "Login" : "Logout"}</button>
      </div>
    </div>
  )
}

export default Header