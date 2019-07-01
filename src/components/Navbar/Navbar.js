import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import styles from "./navbar.module.scss";
import "./../../styles/hamburgers/hamburgers.scss";

class Navbar extends React.Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    const { menuLinks } = this.props;
    const menuActive = this.state.showMenu ? styles.isActive : "";
    const burgerActive = this.state.showMenu ? "is-active" : "";
    return (
      <div className={styles.menuContainer}>
        <div className={styles.toogleMenu}>
          <button className={cx("hamburger", "hamburger--squeeze", burgerActive)} type="button" onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <nav className={cx("", menuActive)}>
          <ul className={styles.mainNav}>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link to={`${link.link}`} activeClassName={styles.mainNavActive}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
