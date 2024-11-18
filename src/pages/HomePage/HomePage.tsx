import { useState, useEffect } from "react";
import { getPosts } from "../../post/client";
import { Post } from "../../post/client/types";
import PostCardsList from "../../post/components/PostCardsList/PostCardsList";
import "./HomePage.css";

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
    return <span className="user-feedback">Loading...</span>;
  }

  return (
    <main>
      <h2 className="page-titles">Posts List</h2>
      {posts.length > 0 ? (
        <PostCardsList posts={posts} />
      ) : (
        <p className="user-feedback">There are no posts</p>
      )}
    </main>
  );
};

export default HomePage;
