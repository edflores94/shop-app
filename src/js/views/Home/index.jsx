import React, { useState, useEffect, useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyCarousel from "components/Carousel/Carousel";
import AppContext from "context/app/AppContext";
import homeCallProccess from "logic/homeCall";

const useStyles = makeStyles(() => ({
  root: {
    margin: "2rem",
    paddingTop: "0.5rem"
  }
}));

export default function Home(props) {
  const [renderFlag, setRenderFlag] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const { root } = useStyles();

  // using AppContext
  const { language } = useContext(AppContext);

  useEffect(() => {
    callHomeApi();
  }, []);

  // change language
  const prevLanguage = useRef(language);
  useEffect(async() => {
    if (prevLanguage.current !== language) {
      if (!homeData[language]) {
        setRenderFlag(false);
        callHomeApi();
      }
      prevLanguage.current = language;
    }
  }, [language]);

  async function callHomeApi() {
    let response = await homeCallProccess({ language });
    const newData = {
      ...homeData,
      [language]: response.data
    };
    setHomeData(newData);
    setRenderFlag(true);
    props.handleChildCompleted(true);
  }

  if (renderFlag) {
    const hData = homeData && homeData[language] ? homeData[language] : [];
    //const { carouselItems, title } = homeData[language];
    return (
      <div className={root}>
        <MyCarousel carouselData={hData.carouselItems} />
      </div>
    );
  } else {
    return null;
  }
}
