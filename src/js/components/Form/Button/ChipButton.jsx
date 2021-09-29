import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

ChipButton.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  avatarIcon: PropTypes.element,
  deleteIcon: PropTypes.element
};
export default function ChipButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        label={props.label}
        clickable={props.clickable}
        color={props.color}
        disabled={props.disabled}
        onClick={props.onClickFunc}
        onDelete={props.onDeleteFunc}
        avatar={props.avatarIcon}
        deleteIcon={props.deleteIcon}
      />
    </div>
  );
}
