import React, { useReducer } from "react";
import AppReducer from "context/app/AppReducer";
import AppContext from "context/app/AppContext";
import { SET_APP_LANGUAGE } from "./types";

const FooterState = props => {
  const initialState = {
    language: "es"
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppLanguage = (newLang) => {
    dispatch({
      type: SET_APP_LANGUAGE,
      data: newLang
    });
  }
  
  return (
    <AppContext.Provider
      value={{
        language: state.language,
        setAppLanguage
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default FooterState;
