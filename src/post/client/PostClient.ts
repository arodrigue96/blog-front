import { Post, PostData } from "../types";
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

  async createPost(postData: PostData): Promise<Post> {
    const response = await fetch(`${this.url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(postData),
    });

    const newPost = (await response.json()) as Post;

    return newPost;
  }
}

export default PostClient;
