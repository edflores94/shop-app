import getImagesApi from "api/images";
import { getImagesRequest } from "requests/requests";

async function getImagesCall() {
  let lazyImgResponse = null;

  try {
    const lazyImgRequest = getImagesRequest();
    const lazyImgCall = getImagesApi(lazyImgRequest);

    lazyImgResponse = await lazyImgCall;
    return lazyImgResponse;
  } catch (error) {
    console.log(error);
  }
}

export default getImagesCall;
