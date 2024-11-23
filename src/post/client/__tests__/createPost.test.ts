import { PostData } from "../../types";
import PostClient from "../PostClient";

describe("Given the createPost method", () => {
  describe("When it's called and receives the post data title 'undostres ya no me ves'", () => {
    test("Then it should return a new post with the title 'undostres ya no me ves'", async () => {
      const postData: PostData = {
        title: "undostres ya no me ves",
        author: "",
        imageUrl: "",
        altImageText: "",
        content: "",
      };

      const newPost = await new PostClient().createPost(postData);

      expect(newPost.title).toBe(postData.title);
    });
  });
});
