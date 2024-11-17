import { useState, useEffect } from "react";
import { getPosts } from "../../post/client";
import { Post } from "../../post/client/types";
import PostCardsList from "../../post/components/PostCardsList/PostCardsList";

const HomePage: React.FC = () => {
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
    <main>
      {posts.length > 0 ? (
        <PostCardsList posts={posts} />
      ) : (
        "There are no posts"
      )}
    </main>
  );
};

export default HomePage;
