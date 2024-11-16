import { useState, useEffect } from "react";
import { getPosts } from "../client";
import { Post } from "../client/types";

const PostCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPosts();

      setPosts(data.posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <article className="post-card">
      <h2 className="post-card__title">
        {posts.length > 0 ? posts[0].title : "There are no posts"}
      </h2>
    </article>
  );
};

export default PostCard;
