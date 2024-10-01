import React from "react";
import "../Css/Style.css";
import appscrip from '../../src/Image/appscrip-logo.webp'

import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="Mainheader">
          <div className="head">
            <div className="head-right">
              <div>
                <img src={appscrip} alt="App Logo" />
              </div>
              {/* Language Dropdown */}
              
            </div>
            <div className="head-middal">
              <div>{/* <img src={logo} alt="" /> */}</div>
            </div>
            <div className="head-left" style={{ fontSize: "22px" }}>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <div className="language-dropdown">
                <select>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="gujarati">Gujarati</option>
                </select>
              </div>
              </ul>
              
            </div>
          </div>
          
          <div className="head2">
            <ul>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">SKILS</a>
              </li>
              <li>
                <a href="#">STORIES</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
    
  );
};

export default Header;
