import React, { useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
// get data from apiary or endpoint
import { chekoutFormData } from "common/checkoutMock";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: "3rem",
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    [theme.breakpoints.down("xs")]: {
      orientation: "vertical"
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    borderRadius: "15px",
    height: "2rem",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function Checkout() {
  const classes = useStyles();
  const [mobileView, setMobileView] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setMobileView(true) 
        : setMobileView(false)
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  const btnTexts = chekoutFormData.buttons;
  const confirmation = chekoutFormData.confirmation;

  return (
    <Fragment>
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {chekoutFormData.title}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} orientation={ mobileView ? "vertical" : "horizontal"}>
            {chekoutFormData.steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <Fragment>
            {activeStep === chekoutFormData.steps.length ? (
              <Fragment>
                <Typography variant="h5" gutterBottom>
                  {confirmation.title}
                </Typography>
                <Typography variant="subtitle1">
                  {confirmation.description}
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      {btnTexts.back}
                    </Button>
                  )}
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button} sx={{ borderRadius: "5px" }}>
                    {activeStep === chekoutFormData.steps.length - 1 ? btnTexts.place : btnTexts.next}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
      </div>
    </Fragment>
  );
}
