//import { transformIpData } from "transformers/images";
import { makeAxiosRequest } from "utils/requests/webRequest";

async function getImagesApi(request) {
  const response = {
    success: false,
    statusCode: 0,
    data: null
  };

  try {
    const webResponse = await makeAxiosRequest(request);

    const { status: statusCode } = webResponse;

    response.statusCode = statusCode;

    if (statusCode === 200) {
      const { data } = webResponse;
      //const transformedData = transformIpData(data);

      //if (transformedData) {
      if (data) {
        response.success = true;
        //response.data = transformedData;
        response.data = data;

        return Promise.resolve(response.data);
      }
    }
  } catch (ex) {}

  return Promise.reject(response);
}

export default getImagesApi;
