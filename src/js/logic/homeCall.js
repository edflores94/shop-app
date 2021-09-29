import getHomeApi from "api/home";
import { getHomeRequest } from "requests/requests";

async function homeCallProccess(payload) {
  const { language } = payload;
  let homeResponse = null;

  try {
    const homeRequest = getHomeRequest(language);
    const homeCall = getHomeApi(homeRequest);

    homeResponse = await homeCall;
    return homeResponse;
  } catch (error) {
    console.log(error);
  }
}

export default homeCallProccess;