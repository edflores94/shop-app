import getMenuApi from "api/menu";
import { getMenuRequest } from "requests/requests";

async function menuCallProccess(payload) {
  const { language } = payload;
  let menuResponse = null;

  try {
    const menuRequest = getMenuRequest(language);
    const menuCall = getMenuApi(menuRequest);

    menuResponse = await menuCall;
    return menuResponse;
  } catch (error) {
    console.log(error);
  }
}

export default menuCallProccess;