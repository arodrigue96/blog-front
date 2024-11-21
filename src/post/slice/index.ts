import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";

interface PostsState {
  posts: Post[];
}

const postsInitialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});

export const { loadPosts } = postsSlice.actions;
export default postsSlice.reducer;
