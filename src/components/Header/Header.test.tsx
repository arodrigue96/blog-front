import { render, screen } from "@testing-library/react";
import Header from "./Header";

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
  });
});
