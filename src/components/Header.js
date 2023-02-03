import { HEADER_IMG_URL } from "../../Constants";
import { Link } from "react-router-dom";
import React , {useState, useContext} from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
export const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={HEADER_IMG_URL} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { users } = useContext(UserContext);
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
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <h1 className="user"> {users.name} </h1>
      {isLoggedIn ?(
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ):(
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    
    </div>
  );
};

export default Header;
