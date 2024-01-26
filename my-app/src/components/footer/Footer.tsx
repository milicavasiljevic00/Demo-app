import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="box">
      <div className="container1">
        <div className="row">
          <div className="column">
            <p className="heading">Shopee</p>
            <p style={{ color: "#FFFF" }}>
              Your prefferred online shopping platform. We offer seamless, fun
              and reliable shopping experience to millions users worldwide.
            </p>
            <br />
          </div>
          <div className="column">
            <p className="heading">Services</p>
            <p style={{ color: "#FFFF" }}>
              Discover a world of diverse services on our favored online
              shopping hub, ensuring millions worldwide enjoy a smooth,
              delightful, and trustworthy experience.
            </p>
            <br />
          </div>
          <div className="column">
            <p className="heading">Locations</p>
            <br />
            <br />
          </div>
          <div className="column">
            <p className="heading">Contact us</p>
          </div>
          <div className="column">
            <img className="logo-footer" src="../../assets/footer1-img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
