import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@babel/polyfill";
import App from "views/App";
import Font from "common/fontImports";
// CONTEXT
import AppState from "context/app/AppState";
import MenuState from "context/menu/MenuState";
import FooterState from "context/footer/FooterState";
import "scss/main.scss";

//authentication
import { Auth0Provider } from "utils/auth/react-auth0-spa";
import config from "utils/auth/auth_config.json";
import history from "utils/common/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

const RootComponent = () => (
  <BrowserRouter>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      audience={config.audience}
      onRedirectCallback={onRedirectCallback}
    >
      <Font />
      <AppState>
        <MenuState>
          <FooterState>
            <App />
          </FooterState>
        </MenuState>
      </AppState>
    </Auth0Provider>
  </BrowserRouter>
);

ReactDOM.render(<RootComponent />, document.getElementById("root"));
