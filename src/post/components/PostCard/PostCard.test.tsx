import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { Post } from "../../client/types";

describe("Given the PostCard component", () => {
  describe("When it receives a post with the title 'Exploring the Future of AI'", () => {
    test("Then it should show the post's title 'Exploring the Future of AI' inside a heading", async () => {
      const post: Post = {
        title: "Exploring the Future of AI",
        altImageText: "",
        author: "",
        date: new Date(),
        content: "",
        id: 1,
        imageUrl: "",
      };

      const expectedTitle = /Exploring the Future of AI/i;

      render(<PostCard post={post} imageUrl={""} altImageText={""} />);

      const postCardTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      expect(postCardTitle).toBeInTheDocument();
    });
  });
});
