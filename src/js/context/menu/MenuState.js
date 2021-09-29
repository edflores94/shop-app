import React, { useReducer } from "react";
import MenuReducer from "context/menu/MenuReducer";
import MenuContext from "context/menu/MenuContext";
import menuCallProccess from "logic/menuCall";
import { GET_MENU_ACTION_ERROR, GET_MENU_ACTION_SUCCESS } from "./types";
//import 'regenerator-runtime/runtime'

const MenuState = props => {
  const initialState = {
    isError: false,
    ended: false,
    data: ""
  };

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const getMenuAsync = async (language) => {
    let menuResponse;
    menuResponse = await menuCallProccess({language});

    if (menuResponse.data && !menuResponse.isError) {
      dispatch({
        type: GET_MENU_ACTION_SUCCESS,
        payload: menuResponse.data,
        language
      });
    } else {
      dispatch({
        type: GET_MENU_ACTION_ERROR,
        error: menuResponse.data
      });
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menuData: state.data,
        menuIsError: state.isError,
        menuEnded: state.ended,
        getMenuAsync
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
