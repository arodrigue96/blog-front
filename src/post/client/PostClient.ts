import { Post } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private url = import.meta.env.VITE_API_URL;

  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${this.url}/posts`, {
      method: "GET",
    });

    const postsApi = (await response.json()) as Post[];

    return postsApi;
  }
}

export default PostClient;
