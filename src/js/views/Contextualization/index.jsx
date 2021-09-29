import React, { Fragment, useState, useEffect, useContext, useRef } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";
import BaseLoader from "components/Loader/BaseLoader";
import ChangeLanguage from "components/Modal/ChangeLanguage";
import AppContext from "context/app/AppContext";
import FooterContext from "context/footer/FooterContext";
import MenuContext from "context/menu/MenuContext";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export default function Contextualization(props) {
  const [showLangModal, setShowLangModal] = useState(false);
  const [childIsCompleted, setChildIsCompleted] = useState(false);
  
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    }
  })
  // using AppContext
  const { language, setAppLanguage } = useContext(AppContext);

  const openChangeLanguageModal = () => {
    setShowLangModal(true);
  };

  const closeChangeLanguageModal = (newLanguage) => {
    setAppLanguage(newLanguage);
    setShowLangModal(false);
  };

  /* begin menu functions */
  // using MenuContext
  const { getMenuAsync, menuData, menuEnded } = useContext(MenuContext);

  useEffect(() => {
    getMenuAsync(language);
  }, []);
  /* end menu functions */
  
  /* begin footer functions */
  // using FooterContext
  const { getFooterAsync, footerData, footerEnded } = useContext(FooterContext);
  useEffect(() => {
    getFooterAsync(language);
  }, []);
  /* end footer functions */

  // change language
  const prevLanguage = useRef(language);
  useEffect(() => {
    if (prevLanguage.current !== language) {
      if (!menuData[language]) {
        getMenuAsync(language);
      }

      if (!footerData[language]) {
        getFooterAsync(language);
      }
      prevLanguage.current = language;
    }
  }, [language]);

  function changeDarkMode(){
    debugger;
    setDarkMode(!darkMode);
  }

  const handleChildCompleted = (value) => {
    setChildIsCompleted(value);
  }

  const render = () => {
    const { children } = props;
    const shouldRenderMenu = menuData && childIsCompleted;
    const shouldRenderFooter = footerData && childIsCompleted;

    return (
      <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        { shouldRenderMenu && <Menu language={language} menuData={menuData} handleShowLangModal={openChangeLanguageModal} checked={darkMode} handleChangeDarkMode={changeDarkMode}/> }
        {/*<div>{children}</div>*/}
        {React.cloneElement(children, { handleChildCompleted: handleChildCompleted }) }
        { shouldRenderFooter && <Footer language={language} footerData={footerData} /> }
        { showLangModal && <ChangeLanguage language={language} handleChange={closeChangeLanguageModal} /> }
        { !childIsCompleted && <BaseLoader/>}
      </Fragment>
      </ThemeProvider>
    )
  };

  return render();
}
