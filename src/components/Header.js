import { useState, useContext } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [islogin, setIsLogin] = useState(false);

  // const user = useContext(UserContext);
  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="header flex  justify-between shadow-md w-[100%] bg-orange-200">
      <img data-testid="logo" alt="logo" className="logo  w-28" src={logo} />

      <div className="nav-items flex items-center">
        <ul className="flex space-x-5">
          <li> 
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li>
            <Link data-testid="cart" to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {/* <h4>{user.name}</h4> */}
      {islogin ? (
        <button className="m-6 shadow-md w-24 h-11 items-center rounded-md bg-gray-200 hover:bg-black" onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button className="m-6 shadow-md w-24 h-11 items-center rounded-md bg-slate-300" onClick={() => setIsLogin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
