import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Create post' inside a button", () => {
      const createPostButtonText = /create post/i;

      render(<Button text={"Create Post"} />);

      const createPostButton = screen.getByRole("button", {
        name: createPostButtonText,
      });

      expect(createPostButton).toBeInTheDocument();
    });
  });
});
