import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import HomePage from "./HomePage";

describe("Given the HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Loading...' while the posts data are being load", () => {
      const loadingText = /Loading.../;

      render(
        <Provider store={store}>
          <HomePage /> ;
        </Provider>,
      );

      const userFeedBack = screen.getByText(loadingText);

      expect(userFeedBack).toBeInTheDocument();
    });

    test("Then it should show 'Posts List' inside a heading", async () => {
      const homePageTitleText = /Posts list/i;

      render(
        <Provider store={store}>
          <HomePage /> ;
        </Provider>,
      );

      const homePageTitle = await screen.findByRole("heading", {
        name: homePageTitleText,
      });

      expect(homePageTitle).toBeInTheDocument();
    });

    test("Then it should show the posts' titles 'Patatas Bravas' and 'The Refactor Project' inside their headings", async () => {
      const expectedPost1Title = /Patatas Bravas/i;
      const expectedPost2Title = /The Reactor Project/i;

      render(
        <Provider store={store}>
          <HomePage /> ;
        </Provider>,
      );

      const postCardTitle1 = await screen.findByRole("heading", {
        name: expectedPost1Title,
      });

      const postCardTitle2 = await screen.findByRole("heading", {
        name: expectedPost2Title,
      });

      expect(postCardTitle1).toBeInTheDocument();
      expect(postCardTitle2).toBeInTheDocument();
    });

    test("Then it should show the images 'que en son de bones' 'el millor curs de fullstack' alternatives texts", async () => {
      const expectedPost1AltImage = /que en son de bones/i;
      const expectedPost2AltImage = /el millor curs de fullstack/i;

      render(
        <Provider store={store}>
          <HomePage /> ;
        </Provider>,
      );

      const Post1AltImage = await screen.findByAltText(expectedPost1AltImage);
      const Post2AltImage = await screen.findByAltText(expectedPost2AltImage);

      expect(Post1AltImage).toBeInTheDocument();
      expect(Post2AltImage).toBeInTheDocument();
    });
  });
});
