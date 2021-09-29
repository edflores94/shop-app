import React, { Fragment, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "components/Loader/Loader";
// test templates
//import ScrollModal from "templates/Modal/ScrollModal";
//import Autocomplete from "templates/Autocomplete/Autocomplete";
import getImagesCall from "logic/imagesCall";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "4rem",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    //justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  img: {
    width: "50%",
    padding: "5px",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}));

export default function Gallery() {
  const classes = useStyles();
  const [images, setImages] = useState(false);

  useEffect(async () => {
    const rsp = await getImagesCall();
    setImages(rsp);
  }, []);

  if (!images) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className={classes.root}>
        {images.map(image => {
          return (
            <div className={classes.img}>
              <LazyLoadImage
                //className={classes.img}
                effect="blur"
                src={image.urls.regular} // use normal <img> attributes as props
                alt={image.alt_description}
                key={image.id}
                height="500px" // image.height
                //width="600px" // image.width
                width="100%" // image.width
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
