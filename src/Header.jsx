import React from "react";
import "./Header.css";

function Header() {
  return (
   <div className="header">
      <img
         className="header_logo"
         src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
         alt="logo"
      />
      <div className="header__search">
         <input className="header_searchInput" type="text" />
         {/* {logo} */}
      </div>
      <div className="header__nav">
         
      </div>
   </div>
  );
}

export default Header;
