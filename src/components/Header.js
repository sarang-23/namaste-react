import { useState } from "react";
import { LOGO_URL, CART_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <img src={LOGO_URL} alt="Logo" />
      <div className="nav-links">
        <ul>
          <li>Online Status : {onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            <img className="cart-img" src={CART_IMAGE} alt="cart" />
          </li>
        </ul>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="login-btn"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
