import React from "react";
import styles from "./Loader3.scss";

export default function Loader() {
  function function1() {
    debugger;
    const text = document.querySelector(".Loader3_text p");
    text.innerHTML = text.innerHTML.split("").map((char, i) => {
        `<span style="transform:rotate(${i * 5}deg)">${char}</span>`;
      })
      .join("");
  }

  return (
    <body>
      <div className={styles.circle}>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          <p>Edwin Morales - Frontend Developer</p>
        </div>
      </div>
    </body>
  );
}
