import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormError from "components/Form/FormError/FormError";
// get data from apiary or endpoint
import { chekoutFormData } from "common/checkoutMock";

export default function AddressForm() {
  const formData = chekoutFormData.addressForm;
  const { title, firstName, lastName, addressLn1, addressLn2, city, state, zipcode, country, chkSave } = formData;
  //validating form
  //{...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i, min, max, minLength, maxLength })}
  //{...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange"
  });

  const onSubmit = data => {
    console.log(data);
  }
  
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField id="firstName" name="firstName" label={firstName} fullWidth autoComplete="given-name" {...register("firstName", { required: true })} />
          {errors.firstName && <FormError errText={"First name is required"} />}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="lastName" name="lastName" label={lastName} fullWidth autoComplete="family-name" {...register("lastName", { required: true })}/>
          {errors.lastName && <FormError errText={"Last name is required"} />}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label={addressLn1}
            fullWidth
            autoComplete="shipping address-line1"
            {...register("addressLn1", { required: true })}
          />
          {errors.addressLn1 && <FormError errText={"Address is required"} />}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label={addressLn2}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="country" name="country" label={country} fullWidth autoComplete="shipping country" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="city" name="city" label={city} fullWidth autoComplete="shipping address-level2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label={state} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label={zipcode}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label={chkSave}
          />
        </Grid>
      </Grid>
      </form>
    </Fragment>
  );
}
