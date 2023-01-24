import { HEADER_IMG_URL } from "../../Constants";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Contact from "./Contact";
export const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={HEADER_IMG_URL} />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
