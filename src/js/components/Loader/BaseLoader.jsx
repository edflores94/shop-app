import React from "react";
import styles from "./BaseLoader.scss";

export default function BaseLoader() {
  return (
    <section>
      <div className={styles.loader}/>
    </section>
  );
}

