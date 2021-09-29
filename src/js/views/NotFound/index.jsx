import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import images from "common/images";

const useStyles = makeStyles({
  root: {
    marginTop: 70,
    marginBottom: 20,
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function NotFound() {
  function renderCard() {
    const classes = useStyles();

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        //style={{ minHeight: "100vh" }}
      >
        <Grid item xs={9}>
          <div className={classes.root}>
          <LazyLoadImage
              effect="blur"
              src={images.NOT_FOUND}
              alt={"description"}
              key={"logo"}
              height="300px"
              width="400px"
            />
          </div>
          {/*<Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{textAlign: "center"}}>
                Page not found
                </Typography>
            </CardContent>

            <LazyLoadImage
              effect="blur"
              src={images.NOT_FOUND}
              alt={"description"}
              key={"logo"}
              height="300px"// image.height
              width="400px"// image.width
            />
          </Card>*/}
        </Grid>
      </Grid>
    );
  }
  return (
    <Fragment>
      {renderCard()}
    </Fragment>
  );
}
