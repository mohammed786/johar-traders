import React, { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__address">
          <svg className="footer__icon">
            <use xlinkHref="img/sprite.svg#icon-location_pin"></use>
          </svg>
          Your Address
        </div>
        <div className="footer__copyright">
          © 2023, Johar Traders | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
