import React from "react";
import { Link } from "gatsby";
import styles from "./logo.module.scss";

const Logo = ({ src }) => (
  <div className={styles.headerLogo}>
    <Link to="/">
      <img src={src} alt="dozens" />
    </Link>
  </div>
);

export default Logo;
