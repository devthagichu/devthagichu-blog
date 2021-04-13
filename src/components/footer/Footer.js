import * as React from "react";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyles.footer__container}>
      <span>
        Designed and Developed by <a href="/">@devthagichu</a>
      </span>
      <div>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Linkdin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
