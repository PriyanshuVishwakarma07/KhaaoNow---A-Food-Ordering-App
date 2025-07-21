import { BsCart4 } from "react-icons/bs";
import { assets } from '../assets/assets'
import {useState} from "react"

const Header = () =>{
  const [login, setLogin] = useState(true)
  return(
    <div className="header">
      <div className="logo-container">
        <img className='logo' src={assets.Logo} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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