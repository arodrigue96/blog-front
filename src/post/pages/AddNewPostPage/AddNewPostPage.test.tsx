import { render, screen } from "@testing-library/react";
import AddNewPostPage from "./AddNewPostPage";

describe("Given the AddNewPostPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Add new post' inside a heading", () => {
      const addNewPostTitleText = /Add new post/i;

      render(<AddNewPostPage />);

      const addNewPostTitle = screen.getByRole("heading", {
        name: addNewPostTitleText,
      });

      expect(addNewPostTitle).toBeInTheDocument();
    });

    test("Then it should show 'Title', 'Image URL', 'Alternative Text', 'Content', 'Author' fields", () => {
      render(<AddNewPostPage />);

      const titleField = screen.getByLabelText(/title/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const alternativeTextField = screen.getByLabelText(/alternative text/i);
      const contentField = screen.getByLabelText(/content/i);
      const authorField = screen.getByLabelText(/author/i);

      expect(titleField).toBeInTheDocument();
      expect(imageUrlField).toBeInTheDocument();
      expect(alternativeTextField).toBeInTheDocument();
      expect(contentField).toBeInTheDocument();
      expect(authorField).toBeInTheDocument();
    });

    test("Then it should show a disabled 'Create Post' button", () => {
      const createPostButtonText = /create post/i;

      render(<AddNewPostPage />);

      const createPostButton = screen.getByRole("button", {
        name: createPostButtonText,
      });

      expect(createPostButton).toBeInTheDocument();
      expect(createPostButton).toBeDisabled();
    });
  });
});
