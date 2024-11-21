import PostClient from "../PostClient";

describe("Given the createPost method", () => {
  describe("When it's called with the post title 'undostres ya no me ves", () => {
    test("Then it should return a new post", async () => {
      const expectedTitle = /undostres ya no me ves/i;

      const newPost = await new PostClient().createPost({
        title: "undostres ya no me ves",
        author: "",
        imageUrl: "",
        altImageText: "",
        content: "",
      });

      expect(newPost.title).toMatch(expectedTitle);
    });
  });
});
