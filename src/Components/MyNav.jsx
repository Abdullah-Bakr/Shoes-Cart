import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TemporaryDrawer from "./SideBar";
import Cart from "./Cart";
import { useState } from "react";
import logo from "/images/logo.svg";

function MyNav(props) {
  function SmallNumber() {
    return (
      <span className="absolute top-[10px] text-[10px] px-2 text-white right-[55px] md:top-7 md:right-24 bg-orange-500 rounded-full ">
        {props.amount}
      </span>
    );
  }
  const links = ["Collections", "Men", "Women", "About", "Contact"];

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="flex relative items-center justify-between border-b-[1px] md:my-5 py-5">
      <div className="flex items-center gap-[30px] ">
        <ul className="flex items-center justify-start mx-5 md:mx-0 cursor-pointer">
          <li className="md:hidden">
            <TemporaryDrawer />
          </li>
          <li>
            <img src={logo} alt="" className="cursor-pointer mx-4" />
          </li>
        </ul>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-5 text-gray-500 cursor-pointer">
            {links.map((link) => (
              <li
                key={link}
                className="relative custom-before hover:text-black"
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center md:gap10">
        <div className="cursor-pointer flex gap-2">
          <button onClick={() => setShowCart(!showCart)}>
            <ShoppingCartOutlinedIcon />
          </button>
          {props.amount > 0 && <SmallNumber />}
          <div>
            {showCart && (
              <Cart amount={props.amount} setAmount={props.setAmount} />
            )}
          </div>
        </div>
        <img
          src="/images/image-avatar.png"
          alt=""
          className="h-[25px] w-[25px] md:h-[60px] md:w-[60px] mx-4 transition-all duration-300 cursor-pointer object-contain border-solid rounded-full border-[3px] border-transparent hover:border-orange-500"
        />
      </div>
    </div>
  );
}

export default MyNav;
