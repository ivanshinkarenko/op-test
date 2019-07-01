import React from "react";
import { Link } from "gatsby";
import logoWhite from "./../../images/logo-w.png";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <div className="container">
        <div className={styles.footerIn}>
          <div className={styles.footerLogo}>
            <Link to="/">
              <img src={logoWhite} alt="dozens" />
            </Link>
          </div>
          <p>
            Dozens is a trading name of Project Imagine Ltd, a company registered in England and Wales (No. 11153882). We are authorised by the
            Financial Conduct Authority as an e-money institution (FRN 900894) and also as an investment firm (FRN 814281). We are not a bank. Our
            registered office is at 1 St Katharine’s Way, London E1W 1UN. The card is issued by Wirecard Card Solutions Ltd pursuant to licence by
            Mastercard International.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className="container">
        <div className={styles.footerIn}>
          <p>© 2019 Dozens | v 5</p>
          <div className={styles.footerMenu}>
            <Link to="/terms">Terms of use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
