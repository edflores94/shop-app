import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Routes from "components/Routes/Routes";
import RootErrorBoundary from "components/RootErrorBoundary/RootErrorBoundary";

App.propTypes = {
  location: PropTypes.object
};

function App() {
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    setRenderFlag(true);
  }, []);

  /** render functions */
  if (renderFlag) {
    return <Routes />;
  }

  return null;
}

export default RootErrorBoundary(App);
