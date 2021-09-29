import React, { Suspense, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Contextualization from "views/Contextualization";
import { publicPath, routeCodes } from "common/routeConfig";

const LazyHome = React.lazy(() => import("views/Home" /* webpackChunkName: "home" */));
const LazyCategories = React.lazy(() => import("views/Categories" /* webpackChunkName: "categories" */));
const LazyTravel = React.lazy(() => import("views/Travel" /* webpackChunkName: "travel" */));
const LazyGallery = React.lazy(() => import("views/Gallery" /* webpackChunkName: "gallery" */));
const LazyPaymentForm = React.lazy(() => import("templates/Checkout/Checkout" /* webpackChunkName: "pay-form" */));
const LazySignIn = React.lazy(() => import("templates/SignIn/SignIn" /* webpackChunkName: "sign-in" */));
const LazySignInSide = React.lazy(() => import("templates/SignIn/SignInSide" /* webpackChunkName: "sign-in-side" */));
const LazyEnroll = React.lazy(() => import("templates/Enroll/Enrollment" /* webpackChunkName: "enrollment" */));
const LazyLoggedIn = React.lazy(() => import("views/LoggedIn" /* webpackChunkName: "logged-in" */));
const LazyNotFound = React.lazy(() => import("views/NotFound" /* webpackChunkName: "not-found" */));

const HomeComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyHome {...props} />
      </Contextualization>
    </Suspense>
  );
};

const CategoriesComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyCategories {...props} />
      </Contextualization>
    </Suspense>
  );
};

const TravelComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyTravel {...props} />
      </Contextualization>
    </Suspense>
  );
};

const GalleryComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyGallery {...props} />
      </Contextualization>
    </Suspense>
  );
};

const PaymentFormComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyPaymentForm {...props} />
      </Contextualization>
    </Suspense>
  );
};

const SignInComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <LazySignIn {...props} />
    </Suspense>
  );
};

const SignInSideComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <LazySignInSide {...props} />
    </Suspense>
  );
};

const EnrollComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <LazyEnroll {...props} />
    </Suspense>
  );
};

const LoggedInComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <LazyLoggedIn {...props} />
    </Suspense>
  );
};

const NotFoundComponent = props => {
  return (
    <Suspense fallback={Loader}>
      <Contextualization>
        <LazyNotFound {...props} />
      </Contextualization>
    </Suspense>
  );
};

function Routes() {
  return (
    <Switch>
      <Route exact path={publicPath} component={HomeComponent} />
      <Route path={routeCodes.CATEGORIES} component={CategoriesComponent} />
      <Route path={routeCodes.TRAVEL} component={TravelComponent} />
      <Route path={routeCodes.GALLERY} component={GalleryComponent} />
      <Route path={routeCodes.PAYMENT_FORM} component={PaymentFormComponent} />
      <Route path={routeCodes.SIGN_IN} component={SignInComponent} />
      <Route path={routeCodes.SIGN_IN_SIDE} component={SignInSideComponent} />
      <Route path={routeCodes.ENROLLMENT} component={EnrollComponent} />
      <Route path={routeCodes.LOGGED_IN} component={LoggedInComponent} />
      <Route path={"*"} component={NotFoundComponent} />
    </Switch>
  );
}

export default Routes;
