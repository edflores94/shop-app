import React, { Fragment } from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "./Footer.scss";

export default function Footer(props) {
  function renderElements(data) {
    const elements = data && data.elements ? data.elements : [];

    return (
      <div data-testid="divFooter">
        <Grid container spacing={5}>
          {elements.map((element, key) => {
            return key < 2 && (
              <Grid item xs={6} sm={6}>
                <Box borderBottom={1} style={{ color: "lightblue" /*"rgb(0, 128, 128)"*/, fontWeight: "800" }}>
                  {element.title}
                </Box>
                {element.items &&
                  element.items.map((item, key) => {
                    return (
                      <Fragment>
                        <Box>
                          <Link href={item.url} color="inherit" key={key}>
                            {item.label}
                          </Link>
                        </Box>
                      </Fragment>
                    );
                  })}
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  function renderSocialMedia() {
    return (
      <div className={styles.imgs}>
        <Link href="https://www.facebook.com" color="inherit" style={{ fontSize: "20px", cursor: "pointer" }}>
          <FacebookIcon />
        </Link>
        <Link href="https://www.pinterest.com" color="inherit" style={{ fontSize: "20px", cursor: "pointer" }}>
          <PinterestIcon />
        </Link>
        <Link href="https://www.instagram.com" color="inherit" style={{ fontSize: "20px", cursor: "pointer" }}>
          <InstagramIcon />
        </Link>
        <Link href="https://www.youtube.com" color="inherit" style={{ fontSize: "20px", cursor: "pointer" }}>
          <YouTubeIcon />
        </Link>
        <Link href="https://www.twitter.com" color="inherit" style={{ fontSize: "20px", cursor: "pointer" }}>
          <TwitterIcon />
        </Link>
      </div>
    );
  }

  function renderCopyright(data) {
    const copyright = data && data.copyright ? data.copyright : [];

    return (
      <div>
        {copyright.address}
        <br />
        {new Date().getFullYear() + " © "}
        <Link color="inherit" href="https://material-ui.com/">
          {`${copyright.appName}.`}
        </Link>{" "}
        {copyright.rights}
      </div>
    );
  }

  function render() {
    const { footerData, language } = props;
    return (
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="text.secondary"
        color="white"
        //style={{ backgroundImage: 'url("http://localhost:3999/images/pexels-pixabay-326279.jpg' }}
      >
        <Container maxWidth="lg">
          {/*renderElements(footerData[language])*/}
          <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            {renderSocialMedia()}
            {renderCopyright(footerData[language])}
          </Box>
        </Container>
      </Box>
    );
  }

  return render();
}
