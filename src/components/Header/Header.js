import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "./../Logo/Logo";
import logoWhite from "./../../images/logo-w.png";
import styles from "./header.module.scss";

const Header = ({ menuLinks }) => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.headerWrap}>
        <Logo src={logoWhite} />
        <Navbar menuLinks={menuLinks} />
      </div>
    </div>
  </header>
);

export default Header;
