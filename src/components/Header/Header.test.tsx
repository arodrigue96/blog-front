import { render, screen } from "@testing-library/react";
import Header from "./Header";
import NavMenu from "../NavMenu/NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Aniol's Backoffice Blog' inside a heading", () => {
      const appTitleText = /aniol's Backoffice Blog/i;

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: appTitleText,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show two links 'Posts list' and 'Add new post'", () => {
      const postsPageLinkText = /posts list/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const postsPageLink = screen.getByRole("link", {
        name: postsPageLinkText,
      });

      expect(postsPageLink).toBeInTheDocument();
    });
  });
});
