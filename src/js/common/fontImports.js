import { createGlobalStyle } from "styled-components";
const FONTS_SERVER_URL = "http://localhost:3999/fonts";

export default createGlobalStyle`
  @font-face {
    font-family: "RealHeadPro-Light";
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Light.eot");
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Light.eot?#iefix") format("embedded-opentype"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Light.woff") format("woff"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Light.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "RealHeadPro-Medium";
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Medium.eot");
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Medium.eot?#iefix") format("embedded-opentype"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Medium.woff") format("woff"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Medium.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }  

  @font-face {
    font-family: "RealHeadPro-Bold";
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Bold.eot");
    src: url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Bold.eot?#iefix") format("embedded-opentype"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Bold.woff") format("woff"),
      url("${FONTS_SERVER_URL}/RealHeadPro/RealHeadPro-Bold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
