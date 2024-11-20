import { render, screen } from "@testing-library/react";
import { Post } from "../../client/types";
import PostCardsList from "./PostCardsList";

describe("Given the PostCardsList component", () => {
  describe("When it renders 2 posts with the title 'Exploring the Cryptocurrencies' and 'Feed the animals'", () => {
    const bitcoin: Post = {
      id: 1,
      title: "Exploring the Cryptocurrencies",
      imageUrl: "",
      altImageText: "Bitcoin in all time high",
      content: "",
      author: "",
      date: new Date(),
    };

    const animals: Post = {
      id: 2,
      title: "Feed the animals",
      imageUrl: "",
      altImageText: "A happy dog eating",
      content: "",
      author: "",
      date: new Date(),
    };

    test("Then it should show the posts' titles 'Exploring the Cryptocurrencies' and 'Feed the animals' inside their headings", async () => {
      const expectedBitcoinTitle = /Exploring the Cryptocurrencies/i;
      const expectedAnimalsTitle = /Feed the animals/i;

      render(<PostCardsList posts={[bitcoin, animals]} />);

      const bitcoinPostCardTitle = await screen.getByRole("heading", {
        name: expectedBitcoinTitle,
      });

      const animalsPostCardTitle = await screen.getByRole("heading", {
        name: expectedAnimalsTitle,
      });

      expect(bitcoinPostCardTitle).toBeInTheDocument();
      expect(animalsPostCardTitle).toBeInTheDocument();
    });

    test("Then it should show the images 'Bitcoin in all time high' 'A happy dog eating' alternatives texts", async () => {
      const expectedBitcoinAltImage = /Bitcoin in all time high/i;
      const expectedAnimalsAltImage = /A happy dog eating/i;

      render(<PostCardsList posts={[bitcoin, animals]} />);

      const bitcoinPostCardAltImage = await screen.getByAltText(
        expectedBitcoinAltImage,
      );
      const animalsPostCardAltImage = await screen.getByAltText(
        expectedAnimalsAltImage,
      );

      expect(bitcoinPostCardAltImage).toBeInTheDocument();
      expect(animalsPostCardAltImage).toBeInTheDocument();
    });
  });
});
