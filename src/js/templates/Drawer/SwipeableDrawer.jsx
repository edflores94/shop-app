import React, { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//components
import { Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@material-ui/core";
//icons
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import CameraIcon from '@material-ui/icons/Camera';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Switch from "components/Switch/Switch";

const positions = ["left", "right", "top", "bottom"];
/*const elements = [
  {
    text: "Form",
    icon: <CreditCardIcon />
  }
];*/

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  toggle: {
    //marginLeft: "2rem",
    paddingLeft: "1rem"
  }
});

export default function SwipeableTemporaryDrawer(props) {
  const { data } = props;
  const classes = useStyles();
  
  function getMenuIcon(key) {
    switch (key) {
      case "/":
        return <HomeIcon />;
        break;
      case "/categories":
        return <CategoryIcon />;
        break;
      case "/travel":
        return <FlightTakeoffIcon />;
        break;
      case "/checkout":
        return <CreditCardIcon />;
        break;
      case "/gallery":
        return <CameraIcon />;
        break;
      case "/enroll":
        return <CreditCardIcon />;
        break;
      default:
        return null;
        break;
    }
  }

  const getElementList = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={props.changeFunc(anchor, false)}
      onKeyDown={props.changeFunc(anchor, false)}
    >
      <List>
        {
          //elements.map((item, index) => (
          data && data.items && data.items.map((item, index) => (
          <Fragment>
            <ListItem button key={index} component={Link} to={item.href}>
              <ListItemIcon style={{color: "rgb(0, 128, 128)"}} >
                { getMenuIcon(item.href) }
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
            {/*index == data.items.length - 3 && <Divider />*/}
          </Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {positions.map(anchor => (
        <Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={props.states[anchor]}
            onClose={props.changeFunc(anchor, false)}
            onOpen={props.changeFunc(anchor, true)}
          >
            {getElementList(anchor)}
            <div className={classes.toggle}>
            <Switch checked={props.checked} handleChangeDarkMode={props.handleChangeDarkMode} />
            </div>
            
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
