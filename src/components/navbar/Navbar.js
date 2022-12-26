import React, { Fragment, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(false);
  };

  const Menu = () => (
    <Fragment>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </Fragment>
  );

  return (
    <div className="gpt3__navbar d-flex align-center">
      <div className="gpt3__navbar-links d-flex align-center">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container d-flex">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign d-flex align-center">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? 
          (<RiCloseLine color="#fff" size={27} onClick={toggleHandler} />)
          : ( <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />)
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center d-flex">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
