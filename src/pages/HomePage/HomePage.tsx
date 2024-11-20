import { useState, useEffect } from "react";
import { Post } from "../../post/types";
import PostCardsList from "../../post/components/PostCardsList/PostCardsList";
import PostClient from "../../post/client/PostClient";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const postsData = await new PostClient().getPosts();

      setPosts(postsData);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <h2 className="page-titles">Posts List</h2>
      <PostCardsList posts={posts} />
      {isLoading && <span className="user-feedback">Loading...</span>}
      {posts.length === 0 && <p>There are no posts</p>}
    </main>
  );
};

export default HomePage;
