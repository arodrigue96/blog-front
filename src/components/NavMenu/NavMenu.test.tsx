import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show two links 'Posts list' and 'Add new post'", () => {
      const postsPageLinkText = /posts list/i;
      const addNewPostLinkText = /add new post/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

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
