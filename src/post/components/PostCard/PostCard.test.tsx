import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { Post } from "../../client/types";

describe("Given the PostCard component", () => {
  describe("When it receives a post with the title 'Exploring the Cryptocurrencies'", () => {
    test("Then it should show the post's title 'Exploring the Cryptocurrencies' inside a heading", async () => {
      const post: Post = {
        id: 1,
        title: "Exploring the Cryptocurrencies",
        imageUrl: "",
        altImageText: "",
        content: "",
        author: "",
        date: new Date(),
      };

      const expectedTitle = /Exploring the Cryptocurrencies/i;

      render(<PostCard post={post} />);

      const postCardTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      expect(postCardTitle).toBeInTheDocument();
    });
  });
});
