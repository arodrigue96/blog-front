import { useState, useEffect } from "react";
import { Post } from "../../post/types";
import PostCardsList from "../../post/components/PostCardsList/PostCardsList";
import "./HomePage.css";
import PostClient from "../../post/client/PostClient";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const postsData = await new PostClient().getPosts();

      setPosts(postsData.posts);
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
