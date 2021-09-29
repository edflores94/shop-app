import { GET_MENU_ACTION_ERROR, GET_MENU_ACTION_SUCCESS } from "./types";

export default (state, action) => {
  const { payload, error, type, language } = action;

  switch (type) {
    case GET_MENU_ACTION_SUCCESS:
      return {
        ...state,
        isError: false,
        ended: true,
        data: {
          ...state.data,
          [language]: payload
        }
      };

    case GET_MENU_ACTION_ERROR:
      return {
        ...state,
        isError: true,
        ended: true,
        data: error
      };
    default:
      return state;
  }
};
