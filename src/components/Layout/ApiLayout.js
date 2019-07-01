import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Anchors from "../Anchors/Anchors";
import styles from "./layout.module.scss";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const ApiLayout = ({ children, tableOfContents }) => {
  return (
    <div className={styles.faqWrapper}>
      <Sidebar />
      <div className={styles.faqContent}>{children}</div>
      <Anchors anchors={tableOfContents} />
    </div>
  );
};

export default ApiLayout;

ApiLayout.propTypes = {
  children: PropTypes.object,
  tableOfContents: PropTypes.string,
};
