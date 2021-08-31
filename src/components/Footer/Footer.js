import React from "react";
import "./module.footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Cinema</h3>
        </div>
        <div className="footer-right">
          <p>
            All movies begin at dusk. If you're unsure when dusk is, visit any
            weather site to see the time of dusk each day. Call (312) 742-1134
            for daily listings and weather-related cancellations.
          </p>
        </div>
      </div>
      <div className="copyright">&copy;2021 all rights reserved</div>
    </footer>
  );
};

export default Footer;
