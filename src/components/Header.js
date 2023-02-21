import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {user ? (
            <button onClick={() => setUser(false)}>Logout</button>
          ) : (
            <button onClick={() => setUser(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
