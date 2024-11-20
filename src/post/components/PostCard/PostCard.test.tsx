import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { Post } from "../../types";

describe("Given the PostCard component", () => {
  describe("When it receives a post with the title 'Exploring the Cryptocurrencies'", () => {
    const bitcoin: Post = {
      id: 1,
      title: "Exploring the Cryptocurrencies",
      imageUrl: "",
      altImageText: "Bitcoin in all time high",
      content: "",
      author: "",
      date: new Date(),
    };

    test("Then it should show the post's title 'Exploring the Cryptocurrencies' inside a heading", async () => {
      const expectedTitle = /Exploring the Cryptocurrencies/i;

      render(<PostCard post={bitcoin} />);

      const postCardTitle = await screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(postCardTitle).toBeInTheDocument();
    });

    test("Then it should show an image with 'Bitcoin in all time high' alternative text", async () => {
      const expectedAltImage = /Bitcoin in all time high/i;

      render(<PostCard post={bitcoin} />);

      const postCardAltImage = await screen.getByAltText(expectedAltImage);

      expect(postCardAltImage).toBeInTheDocument();
    });
  });
});
