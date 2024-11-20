import { Post } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private url = import.meta.env.VITE_API_URL;

  async getPosts(): Promise<{ posts: Post[] }> {
    const response = await fetch(`${this.url}/posts`, {
      method: "GET",
    });

    const postsApi = (await response.json()) as { posts: Post[] };

    return postsApi;
  }
}

export default PostClient;
