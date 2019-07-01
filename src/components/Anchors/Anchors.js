import React from "react";
import styles from "./anchors.module.scss";

const Anchors = ({ anchors }) => (
  <div className={styles.faqAnchors}>
    <aside>
      <div className={styles.faqAnchorsTitle}>CONTENTS</div>
      <div dangerouslySetInnerHTML={{ __html: anchors }} />
    </aside>
  </div>
);

export default Anchors;
