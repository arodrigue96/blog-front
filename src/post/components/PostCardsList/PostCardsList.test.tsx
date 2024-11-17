import { render, screen } from "@testing-library/react";
import { Post } from "../../client/types";
import PostCardsList from "./PostCardsList";

describe("Given the PostCardsList component", () => {
  describe("When it renders 2 posts with the title 'Exploring the Future of AI' and 'Innovation in Renewable Energy'", () => {
    test("Then it should show the posts' titles 'Exploring the Future of AI' and 'Innovation in Renewable Energy'inside their headings", async () => {
      const post1: Post = {
        title: "Exploring the Future of AI",
        altImageText: "",
        author: "",
        date: new Date(),
        content: "",
        id: 1,
        imageUrl: "",
      };

      const post2: Post = {
        title: "Innovation in Renewable Energy",
        altImageText: "",
        author: "",
        date: new Date(),
        content: "",
        id: 2,
        imageUrl: "",
      };

      const expectedTitle1 = /Exploring the Future of AI/i;
      const expectedTitle2 = /Innovation in Renewable Energy/i;

      render(<PostCardsList posts={[post1, post2]} />);

      const postCardTitle1 = await screen.findByRole("heading", {
        name: expectedTitle1,
      });

      const postCardTitle2 = await screen.findByRole("heading", {
        name: expectedTitle2,
      });

      expect(postCardTitle1).toBeInTheDocument();
      expect(postCardTitle2).toBeInTheDocument();
    });
  });
});
