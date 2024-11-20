import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Page not found!' inside a heading", async () => {
      const notFoundPageTitleText = /Page not found!/i;

      render(<NotFoundPage />);

      const notFoundPageTitle = await screen.findByRole("heading", {
        name: notFoundPageTitleText,
      });

      expect(notFoundPageTitle).toBeInTheDocument();
    });

    test("Then it should show an image with the 'Illustration of a page not found error with a pumpkin-shaped character' alternative text", async () => {
      const expectedImageAltText =
        /Illustration of a page not found error with a pumpkin-shaped character/i;

      render(<NotFoundPage />);

      const imageAltText = await screen.findByAltText(expectedImageAltText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
