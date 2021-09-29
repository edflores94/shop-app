import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./GeneralErrorPage.scss";

GeneralErrorPage.propTypes = {
  data: PropTypes.object
};
function GeneralErrorPage() {
  const [wrapperClasses, setWrapperClasses] = useState(null);

  useEffect(() => {
    const nextWrapperClasses = classNames("container", styles.wrapper);
    setWrapperClasses(nextWrapperClasses);
  }, []);

  return render();

  function render() {
    return (
      <div className={wrapperClasses}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{"¡Un Error ha Ocurrido!"}</h1>
        </div>
      </div>
    );
  }
}

export default GeneralErrorPage;
