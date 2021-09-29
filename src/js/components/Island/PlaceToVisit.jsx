import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ImageCard from "./ImageCard";
import useWindowPosition from "hook/useWindowPosition";
import places from "static/places";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector("#container-title");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Zoom>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  }
}));
export default function (props) {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div>
      <div className={classes.root} id="place-to-visit">
        <ImageCard place={places[0]} checked={checked} />
        <ImageCard place={places[1]} checked={checked} />
      </div>
      <div className={classes.root}>
        <ImageCard place={places[2]} checked={checked} />
        <ImageCard place={places[3]} checked={checked} />
      </div>
      <div className={classes.root}>
        <ImageCard place={places[4]} checked={checked} />
        <ImageCard place={places[5]} checked={checked} />
      </div>
      <div className={classes.root}>
        <ImageCard place={places[6]} checked={checked} />

        <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top" style={{backgroundColor: "rgb(0, 128, 128)"}}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </div>
    </div>
    
  );
}
