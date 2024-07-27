import React, { useState } from "react";
import logo from "../../assets/Logo1.png";
import { Link } from "react-router-dom";
import { MenuData } from "../../services/menuData";
import "./header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleIconClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header>
      <nav className="navbarItems flex justify-between items-center rounded-lg">
        <span className="cursor-pointer">
          <Link to={"/"}>
            <img className="w-36 h-20" src={logo} alt="logo" />
          </Link>
        </span>
        <div className="nav-menubar">
          <i
            className={`fas ${toggleMenu ? "fa-times" : "fa-bars"}`}
            onClick={handleIconClick}
          ></i>
        </div>
        <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.csName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
