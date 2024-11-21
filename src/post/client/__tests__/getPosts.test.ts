import { Post } from "../../types";
import PostClient from "../PostClient";

describe("Given the getsPosts method of the PostClient class", () => {
  describe("When it's called", () => {
    test("Then it should return a list of posts with the titles 'Patatas Bravas' and 'The Reactor Project'", async () => {
      const expectedPost1TitleText = "Patatas Bravas";
      const expectedPost2TitleText = "The Reactor Project";

      const posts = await new PostClient().getPosts();

      expect(posts).toMatchObject(<Post[]>[
        <Partial<Post>>{ title: expectedPost1TitleText },
        <Partial<Post>>{ title: expectedPost2TitleText },
      ]);
    });
  });
});
