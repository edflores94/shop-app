//import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Menu from "components/Menu/Menu";
// CONTEXT
import AppState from "context/app/AppState";
import MenuState from "context/menu/MenuState";
import FooterState from "context/footer/FooterState";

describe("render menu tests", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AppState>
        <MenuState>
          <FooterState>
            <Menu />
          </FooterState>
        </MenuState>
      </AppState>,
      div
    );
    //const { container } = render(<Menu />);
    //container.querySelector("appLink");
    //const linkElement = screen.getByText(/learn react/i);
    //expect(linkElement).toBeInTheDocument();
    //expect(container.firstChild).toMatchSnapshot();
  });
});
