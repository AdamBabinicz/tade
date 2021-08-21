import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerColumn">
        <h4>Social Media</h4>
        <div>
          <Link to="//facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link to="//instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </Link>
          {/* <div>Telegram</div>
        <div>LinkedIn</div> */}
        </div>
      </div>
      <div className="footerColumn">
        {/* <h4>O mnie</h4>
        <div>Kontakt</div>
        <div>Careers</div> */}
        <p>2021 - {new Date().getFullYear()}.</p>
      </div>
      <div className="footerColumn">
        <h4>
          <AiFillPushpin />
        </h4>
        {/* <div>Mazowieckie</div> */}
        <div>Radom</div>
      </div>
    </div>
  );
};

export default Footer;
