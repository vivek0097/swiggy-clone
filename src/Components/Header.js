import React, {useState} from "react";
import { LOGO_URL } from "../utils/constant";
import userOnlineStatus from "../utils/userOnlineStatus";
import { Link } from "react-router-dom";

const  Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = userOnlineStatus();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);


    return(
        <>
      <div className="header">
        <div className="logo-container">
          <img  className="logo" src={LOGO_URL}  />
        </div>
          <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`nav-items ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={closeMenu}>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li onClick={closeMenu}><Link to="/">Home</Link></li>
            <li onClick={closeMenu}><Link to="/about">About Us</Link></li>
            <li onClick={closeMenu}><Link to="/contact">Contact Us</Link></li>
            <li onClick={closeMenu}><Link to="/grocery">Grocery</Link></li>
            <li onClick={closeMenu}>Cart</li>
            <button className="login-btn" onClick={() => setBtnNameReact("Logout")}>
              {btnNameReact}
            </button>
          </ul>
        </nav>
      </div>
         {/* Backdrop */}
       {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      </>
    )
  }
  export default Header;