import React from "react";
import ReactDOM from "react-dom";
import Footer from "components/Footer/Footer";
// CONTEXT
import AppState from "context/app/AppState";
import FooterState from "context/footer/FooterState";

describe("render footer tests", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AppState>
        <FooterState>
          <Footer />
        </FooterState>
      </AppState>,
      div
    );
  });
});
