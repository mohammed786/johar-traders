import React, { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="header-main">
      <div className="header-main__logo">BusinessLogo</div>
      <ul className="header-main__nav">
        <li className="header-main__nav-link" data-link="2">
          Home
        </li>
        <li className="header-main__nav-link" data-link="2">
          Products
        </li>
        <li className="header-main__nav-link" data-link="3">
          Testimonials
        </li>
        <li className="header-main__nav-link" data-link="4">
          Our Works
        </li>
        <li
          className="header-main__nav-link header-main__nav-link--contact"
          data-link="6"
        >
          Contact Us
        </li>
      </ul>
      <div className="header-main__menu-btn">
        <div className="header-main__menu-btn--line-1"></div>
        <div className="header-main__menu-btn--line-2"></div>
        <div className="header-main__menu-btn--line-3"></div>
      </div>
    </header>
  );
};

export default Header;
