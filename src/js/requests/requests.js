import { API_URLS } from "common/apiUrls";

export function getImagesRequest() {
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      ["Content-Type"]: "application/json"
    },
    url: API_URLS.lazyImg
  };
}

export function getMenuRequest(language) {
  let URL = API_URLS.menu;
  URL = URL.replace("<lan>", language);
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      ["Content-Type"]: "application/json"
    },
    url: URL
  };
}

export function getFooterRequest(language) {
  let URL = API_URLS.footer;
  URL = URL.replace("<lan>", language);
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      ["Content-Type"]: "application/json"
    },
    url: URL
  };
}

export function getHomeRequest(language) {
  let URL = API_URLS.home;
  URL = URL.replace("<lan>", language);
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      ["Content-Type"]: "application/json"
    },
    url: URL
  };
}
