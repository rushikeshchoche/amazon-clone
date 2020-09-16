import { LocationOn } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__locationParent">
        <div className="navbar__location">
          <LocationOn />
        </div>
        <div className="navbar__address">
          <span className="navbar__addressOne">Hello</span>
          <span className="navbar__addressTwo">Select your address</span>
        </div>
      </div>
      <nav>
        <a href="">Mobile</a>
        <a href="">Best Sellers</a>
        <a href="">Today's Deal</a>
        <a href="">Computers</a>
        <a href="">Pantry</a>
        <a href="">Books</a>
        <a href="">New Releases</a>
        <a href="">Gift Ideas</a>
        <a href="">Customer Service</a>
      </nav>
      <img
        className="navbar__shoppingImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
        alt=""
      />
    </div>
  );
}

export default Navbar;
