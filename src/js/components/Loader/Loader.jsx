import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

export default function Loader() {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={3}>
        <CircularProgress/>
      </Grid>
    </Grid>
  );
}
