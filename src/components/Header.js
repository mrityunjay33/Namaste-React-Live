import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="h-28 pr-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((Store)=> Store.cart.items);
  console.log(cartItems);
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
            <Link to="/cart">Cart - {cartItems?.length}</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span>{user.name} - {user.email}</span>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
