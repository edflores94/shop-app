import { SET_APP_LANGUAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_APP_LANGUAGE:
      return {
        ...state,
        language: action.data
      };
    default:
      return state;
  }
};
