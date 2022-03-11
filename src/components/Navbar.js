import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.jpeg" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#home"><i class="fas fa-home"></i>Home</a>
          </li>
          <li>
            <a href="#aboutus"><i class="fa fa-user-circle"></i>About</a>
          </li>
          <li>
            <a href="#shop"><i class="fa fa-shopping-cart"></i>Shop</a>
          </li>
          <li>
            <a href="#menu"><i class="fa fa-list-alt"></i>Menu</a>
          </li>
          <li>
            <a href="#prices"><i class="fa fa-check-circle"></i>Prices</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
