import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { getValueFromInput } from "utils/common/utilities";
// get data from apiary or endpoint
import { chekoutFormData } from "common/checkoutMock";

export default function PaymentForm() {
  const formData = chekoutFormData.paymentMehod;
  const { title, nameCard, cardNumber, expiryDate, cvvNumber, chkRem } = formData;

  function callFunc() {
    console.log(getValueFromInput("cardName"));
  }

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label={nameCard} fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label={cardNumber} fullWidth autoComplete="cc-number" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label={expiryDate} fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label={cvvNumber}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            onChange={callFunc}
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label={chkRem}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
