import React, { useReducer } from "react";
import FooterReducer from "context/footer/FooterReducer";
import FooterContext from "context/footer/FooterContext";
import footerCallProccess from "logic/footerCall";
import { GET_FOOTER_ACTION_ERROR, GET_FOOTER_ACTION_SUCCESS } from "./types";
//import 'regenerator-runtime/runtime'

const FooterState = props => {
  const initialState = {
    isError: false,
    ended: false,
    data: ""
  };

  const [state, dispatch] = useReducer(FooterReducer, initialState);

  const getFooterAsync = async (language) => {
    let footerResponse;
    footerResponse = await footerCallProccess({language});

    if (footerResponse.data && !footerResponse.isError) {
      dispatch({
        type: GET_FOOTER_ACTION_SUCCESS,
        payload: footerResponse.data,
        language
      });
    } else {
      dispatch({
        type: GET_FOOTER_ACTION_ERROR,
        error: footerResponse.data
      });
    }
  };

  return (
    <FooterContext.Provider
      value={{
        footerData: state.data,
        footerIsError: state.isError,
        footerEnded: state.ended,
        getFooterAsync
      }}
    >
      {props.children}
    </FooterContext.Provider>
  );
};

export default FooterState;
