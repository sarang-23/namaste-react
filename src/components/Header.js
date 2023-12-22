import { LOGO_URL, CART_IMAGE } from "../utils/constants";
const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
