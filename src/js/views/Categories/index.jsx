import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComplexButton from "templates/Button/ComplexButton";
//import SpeedDial from "templates/Form/SpeedDial";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "5em"
  }
}));

function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ComplexButton />
      {/*<SpeedDial />*/}
    </div>
  );
}

export default Categories;
