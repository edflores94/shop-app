import React from "react";
import { AppBar, Container, Toolbar, Typography, Link } from "@material-ui/core";

export default function Footer() {
  return (
    <AppBar position="relative" style={{ backgroundColor: "#008080" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
