import { useState } from "react";
import { LOGO_URL, CART_IMAGE } from "../utils/constants";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img src={LOGO_URL} alt="Logo" />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
