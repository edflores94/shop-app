import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles, Card, CardContent, CardMedia, Typography, Grid, Button } from "@material-ui/core";
import "./Carousel.scss";

const useStyles = makeStyles(() => ({
  body: {
    height: "500px"
  }
}));

export default function MyCarousel(props) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [animation, setAnimation] = useState("fade");
  const [indicators, setIndicators] = useState(true);
  const [timeout, setTimeout] = useState(500);
  const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(true);
  const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(false);
  const [cycleNavigation, setCycleNavigation] = useState(true);
  const [carouselItems, setCarouselItems] = useState(props.carouselData);

  function render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>
        <Carousel
          className="Banner"
          autoPlay={autoPlay}
          animation={animation}
          indicators={indicators}
          timeout={timeout}
          cycleNavigation={cycleNavigation}
          navButtonsAlwaysVisible={navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)
          }
          prev={(now, previous) =>
            console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)
          }
          onChange={(now, previous) =>
            console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)
          }
          // fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
          // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          // NextIcon='next'
        >
          {carouselItems.map((item, index) => {
            return renderBanner({
              item,
              key: index,
              contentPosition: item.contentPosition,
              height: "500px"
            });
          })}
        </Carousel>
      </div>
    );
  }

  function renderBanner(payload) {
    const { contentPosition, length, item } = payload;
    const { body } = useStyles();
    const contPosition = contentPosition ? contentPosition : "left";
    const totalItems = length ? length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
      <Grid item xs={12 / totalItems} key="content">
        <CardContent className="Content">
          <Typography className="Title">{item.name}</Typography>
          <Typography className="Caption">{item.caption}</Typography>
          <Button variant="outlined" className="ViewButton">
            View Now
          </Button>
        </CardContent>
      </Grid>
    );

    for (let i = 0; i < mediaLength; i++) {
      const newItem = item.items[i];
      const media = (
        <Grid item xs={12 / totalItems} key={newItem.label}>
          <CardMedia className="Media" image={newItem.image} title={newItem.label} className={body}>
            <Typography className="MediaCaption">{newItem.name}</Typography>
          </CardMedia>
        </Grid>
      );
      items.push(media);
    }

    if (contPosition === "left") {
      items.unshift(content);
    } else if (contPosition === "right") {
      items.push(content);
    } else if (contPosition === "middle") {
      items.splice(items.length / 2, 0, content);
    }

    return (
      <Card raised className="Banner">
        <Grid container spacing={0} className="BannerGrid">
          {items}
        </Grid>
      </Card>
    );
  }

  return render();
}
