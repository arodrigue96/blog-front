import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PostForm from "./PostForm";

describe("Given the PostForm component", () => {
  const user = userEvent.setup();

  const mockFunction = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show 'Title', 'Image URL', 'Alternative Text', 'Content', 'Author' fields", () => {
      render(<PostForm onSubmit={mockFunction} />);

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

      render(<PostForm onSubmit={mockFunction} />);

      const createPostButton = screen.getByRole("button", {
        name: createPostButtonText,
      });

      expect(createPostButton).toBeInTheDocument();
      expect(createPostButton).toBeDisabled();
    });
  });

  describe("When the user fills the title field with 'Undostres ya no me ves'", () => {
    test("Then it should 'Unodostres ya no me ves' inside the title field", async () => {
      const expectedTitleFieldText = "Undostres ya no me ves";

      render(<PostForm onSubmit={mockFunction} />);

      const titleField = screen.getByLabelText(/title/i);
      await user.type(titleField, expectedTitleFieldText);

      expect(titleField).toHaveValue(expectedTitleFieldText);
    });
  });

  describe("When the user fills all the required fields", () => {
    test("Then it should show an enabled 'Create Post' button", async () => {
      render(<PostForm onSubmit={mockFunction} />);

      const titleField = screen.getByLabelText(/title/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const alternativeTextField = screen.getByLabelText(/alternative text/i);
      const contentField = screen.getByLabelText(/content/i);
      const authorField = screen.getByLabelText(/author/i);

      await user.type(titleField, "holi");
      await user.type(imageUrlField, "aniol.webp");
      await user.type(alternativeTextField, "cara de aniol");
      await user.type(contentField, "soy programador");
      await user.type(authorField, "Aniol");

      const createPostButton = screen.getByRole("button", {
        name: /create post/i,
      });

      expect(createPostButton).toBeEnabled();
    });
  });

  describe("And the user click 'Create Post' button", () => {
    test("Then it should call the received function", async () => {
      const receivedFunction = vi.fn();

      render(<PostForm onSubmit={receivedFunction} />);

      const titleField = screen.getByLabelText(/title/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const alternativeTextField = screen.getByLabelText(/alternative text/i);
      const contentField = screen.getByLabelText(/content/i);
      const authorField = screen.getByLabelText(/author/i);

      await user.type(titleField, "holi");
      await user.type(imageUrlField, "aniol.webp");
      await user.type(alternativeTextField, "cara de aniol");
      await user.type(contentField, "soy programador");
      await user.type(authorField, "Aniol");

      const createPostButton = screen.getByRole("button", {
        name: /create post/i,
      });

      await user.click(createPostButton);

      expect(receivedFunction).toHaveBeenCalledOnce();
    });
  });
});
