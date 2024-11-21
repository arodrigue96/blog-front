import { useCallback, useState } from "react";
import PostClient from "../client/PostClient";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadPosts } from "../slice";

const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const posts = useAppSelector((state) => state.postsState.posts);

  const dispatch = useAppDispatch();

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const posts = await new PostClient().getPosts();

    dispatch(loadPosts(posts));

    setIsLoading(false);
  }, [dispatch]);

  return {
    posts,
    isLoading,
    fetchPosts,
  };
};

export default usePosts;
