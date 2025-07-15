import React, {useState, useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import userOnlineStatus from "../utils/userOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const  Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = userOnlineStatus();
  const data = useContext(UserContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

console.warn(data?.loggedInUser, "data")
    return(
        <>
      <div className="flex justify-between mb-2 shadow-lg bg-pink-100">
        <div className="logo-container">
          <img  className="w-24" src={LOGO_URL}  />
        </div>
          {/* <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div> */}
        {/* <nav className={`nav-items ${isMenuOpen ? "open" : ""} `}> */}
        <div className="flex items-center ">
          <ul className="flex p-4 m-4 ">
            <li onClick={closeMenu} className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li onClick={closeMenu} className="px-4"><Link to="/">Home</Link></li>
            <li onClick={closeMenu} className="px-4"><Link to="/about">About Us</Link></li>
            <li onClick={closeMenu} className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li onClick={closeMenu} className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li onClick={closeMenu} className="px-4">Cart</li>
            <button className="login-btn" onClick={() => setBtnNameReact("Logout")}>
              {btnNameReact}
            </button>
            <li className="ps-4 font-bold">{data?.loggedInUser}</li>
          </ul>
        </div>
      </div>
         {/* Backdrop */}
       {/* {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>} */}
      </>
    )
  }
  export default Header;