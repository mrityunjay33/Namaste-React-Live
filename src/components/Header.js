import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-28 pr-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [user, setUser] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-3 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li >
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {user ? (
        <button onClick={() => setUser(false)}>Logout</button>
      ) : (
        <button onClick={() => setUser(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
