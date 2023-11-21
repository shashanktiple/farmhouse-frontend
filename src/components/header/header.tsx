import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/img/logo.svg";
import signIn from "../../assets/img/sign-in.png";
import cart from "../../assets/img/cart.png";
import { Link } from "react-scroll";
import DropDown from "../drop-down/drop-down";
import Home from "../../pages/home/home";
import dropdown from "../../assets/img/dropdown.png";
import search from "../../assets/img/search.png";

export default function Header() {
  const [showMenu, setMenu] = useState(false);

  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setCategory] = useState(0);

  const categories = ["All Catagories", "Vegetables", "Fruits", "Dairy"];

  const jsonCategories = require("../../assets/jsonData/categories.json");

  return (
    <div className="header-container">
      <div className="wrapper-header">
        <div className="logo-section">
          <img src={logo}></img>
        </div>
        <div className="elements-searchBar-section">
          <nav id="nav-link-wrap" className="elements">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="scale">Home</span>
            </Link>
            <Link
              activeClass="active"
              to="categories"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="scale">Categories</span>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="scale">Contact</span>
            </Link>
          </nav>

          <div className="search-bar global-border-radius">
            <div
              className="select global-border-radius"
              onClick={() => setShowCategory(!showCategory)}
            >
              <p>{categories[selectedCategory]}</p>
              <img src={dropdown} alt="dropdown logo" />
              {showCategory ? (
                <ul className="global-border-radius">
                  {jsonCategories.map((obj: any, i: number) => {
                    return (
                      <li
                        key={i}
                        onClick={() => setCategory(obj.key)}
                        className={
                          selectedCategory === obj.key
                            ? "options global-border-radius selected"
                            : "options global-border-radius"
                        }
                      >
                        {obj.value}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>

            <div className="search">
              <input
                type="text"
                name=""
                id="input"
                placeholder={`Search by ${categories[selectedCategory]}`}
              />
            </div>

            <div className="searchbtn global-border-radius">
              <img src={search} alt="" />
            </div>
          </div>
        </div>

        <div className="sign-in-cart-section">
          <div className="sign-in" onClick={() => setMenu(!showMenu)}>
            <div
              className={
                showMenu ? "sign-in-button active-onclick" : "sign-in-button"
              }
            >
              <img src={signIn} />
              <label>Sign In</label>
            </div>
            <div id="drop-down" className="drop-down-menu">
              {showMenu ? <DropDown /> : null}
            </div>
          </div>
          <div className="cart">
            <img src={cart}></img>
            <Link
              activeClass="current-active-page"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
