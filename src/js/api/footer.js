import { validateFooterData } from "validators/footer";
import { makeAxiosRequest } from "utils/requests/webRequest";

export default async function getFooterApi(request) {
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
      const validData = validateFooterData(data);

      if (validData) {
        response.success = true;
        response.data = data;

        return Promise.resolve(response);
      }
    }
  } catch (ex) {}

  return Promise.reject(response);
}
