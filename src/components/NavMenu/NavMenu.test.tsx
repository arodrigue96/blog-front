import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";

describe("Given the NavMenu component", () => {
  describe("When rendered", () => {
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
