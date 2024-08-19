import React, { useState } from "react";
import "./header.scss"
import navlogo from "../../image/logo.svg"
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const links = ["About", "Contact us"]
  return (
    <div className='container'>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={navlogo} alt="" />
        </div>
        <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar__collection">
            <select className="header__select" name="travel" id="travel">
              <option value="travel">Discovery</option>
            </select>
            {
              links.map((el, index) => (<li className="navbar__item"><a key={index} href="#">{el}<span></span></a></li>))
            }

          </ul>
        </div>
        <div className="navbar__icon">
          <CiUser />
          <IoCartOutline />
        </div>

        <div onClick={toggleMenu} className="navbar__menu">
          <RiMenu2Fill />
        </div>
      </nav>
    </div>
  )
}

export default Header