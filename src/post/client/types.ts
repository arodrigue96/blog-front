import { Post } from "../types";

export interface PostClientStructure {
  getPosts(): Promise<{ posts: Post[] }>;
}
