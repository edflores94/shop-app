import React, { useState, useEffect, useContext, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth0 } from "utils/auth/react-auth0-spa";
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { publicPath } from "common/routeConfig";
import SwipeableDrawer from "templates/Drawer/SwipeableDrawer";
import Switch from "components/Switch/Switch";
import styles from "./Menu.scss";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    "@media (max-width: 900px)": {
      paddingLeft: 0
    }
  },
  logo: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    variant: "h6"
  },
  menuButton: {
    fontFamily: "sans-serif",
    fontWeight: 300,
    size: "18px"
  },
  toolbar: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start"
  }
}));

export default function Menu(props) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    mobileView: false
  });
  const { mobileView } = state;
  const { header, logo, menuButton, toolbar } = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const reactAppLogo = (
    <Typography variant="h6" component="h5" className={logo}>
      Safyro
    </Typography>
  );

  /* start mobile functions */
  function displayMobile() {
    const { language, menuData } = props;
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true"
          }}
        >
          <MenuIcon onClick={toggleDrawer("left", true)} />
        </IconButton>
        <SwipeableDrawer states={state} changeFunc={toggleDrawer} data={menuData[language]} checked={props.checked} handleChangeDarkMode={props.handleChangeDarkMode}/>
        <div>{reactAppLogo}</div>
      </Toolbar>
    );
  }

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  /* end mobile functions */

  /* start desktop functions */
  function displayDesktop() {
    return (
      <Toolbar className={toolbar}>
        <div className={styles.logoSection}>
          <Button
            {...{
              color: "inherit",
              to: publicPath,
              component: RouterLink,
              className: menuButton
            }}
          >
            {reactAppLogo}
          </Button>
        </div>
        <div className={styles.itemsSection}>{getMenuButtons()}</div>
        <div className={styles.signInSection}>
          {getChangeLanguage()}
           <Switch checked={props.checked} handleChangeDarkMode={props.handleChangeDarkMode}/>
          {/*getSignInButtons()*/}
        </div>
      </Toolbar>
    );
  }

  function getMenuButtons() {
    const { language, menuData } = props;
    if (menuData[language] && menuData[language].items) {
      return (
        menuData[language].items &&
        menuData[language].items.map(({ label, href }) => {
          return href !== "/" ? (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          ) : null;
        })
      );
    } else {
      return null;
    }
  }

  function getChangeLanguage() {
    return (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          //onClick={handleMenu}
          //component={RouterLink}
          //onClick={openChangeLanguageModal}
          onMouseOver={() => props.handleShowLangModal()}
          //to={routeCodes.SIGN_IN_SIDE}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
      </div>
    );
  }

  function getSignInButtons() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return !isAuthenticated ? (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          //onClick={handleMenu}
          onClick={() => loginWithRedirect({})}
          //component={RouterLink}
          //to={routeCodes.SIGN_IN_SIDE}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    ) : (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          //onClick={handleMenu}
          onClick={() => logout()}
          //component={RouterLink}
          //to={routeCodes.SIGN_IN_SIDE}
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
      </div>
    );
  }

  /* end desktop functions */

  return (
    <AppBar position="fixed" className={header} style={{ backgroundColor: "#008080" }}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
