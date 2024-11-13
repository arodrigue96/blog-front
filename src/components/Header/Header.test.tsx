import { render, screen } from "@testing-library/react";
import Header from "./Header";
import NavMenu from "../NavMenu/NavMenu";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Aniol's Backoffice Blog' inside a heading", () => {
      const appTitleText = /aniol's Backoffice Blog/i;

      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: appTitleText,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show two links 'Posts list' and 'Add new post'", () => {
      const postsPageLinkText = /posts list/i;
      const addNewPostLinkText = /add new post/i;

      render(<NavMenu />);

      const postsPageLink = screen.getByRole("link", {
        name: postsPageLinkText,
      });

      const addNewPostLink = screen.getByRole("link", {
        name: addNewPostLinkText,
      });

      expect(postsPageLink).toBeInTheDocument();
      expect(addNewPostLink).toBeInTheDocument();
    });
  });
});
