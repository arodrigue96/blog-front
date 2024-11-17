import { Post } from "./types";

const url = import.meta.env.VITE_API_URL;

export const getPosts = async (): Promise<{ posts: Post[] }> => {
  const response = await fetch(`${url}/posts`, {
    method: "GET",
  });

  const postsApi = (await response.json()) as { posts: Post[] };

  return postsApi;
};
