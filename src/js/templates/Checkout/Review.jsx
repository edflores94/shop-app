import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
// get data from apiary or endpoint
import { chekoutFormData } from "common/checkoutMock";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review() {
  const formData = chekoutFormData.reviewOrder;
  const { title, products, shipping, payments } = formData;

  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {shipping.text}
          </Typography>
          <Typography gutterBottom>{shipping.name}</Typography>
          <Typography gutterBottom>{shipping.addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
