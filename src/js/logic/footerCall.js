import getFooterApi from "api/footer";
import { getFooterRequest } from "requests/requests";

async function footerCallProccess(payload) {
  const { language } = payload;
  let footerResponse = null;

  try {
    const footerRequest = getFooterRequest(language);
    const footerCall = getFooterApi(footerRequest);

    footerResponse = await footerCall;
    return footerResponse;
  } catch (error) {
    console.log(error);
  }
}

export default footerCallProccess;