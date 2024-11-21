import { useEffect } from "react";
import PostCardsList from "../../components/PostCardsList/PostCardsList";
import "./HomePage.css";
import usePosts from "../../hooks/usePosts";

const HomePage: React.FC = () => {
  const { posts, isLoading, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <main>
      <h2 className="page-title">Posts List</h2>
      <PostCardsList posts={posts} />
      {isLoading && <span className="user-feedback">Loading...</span>}
      {posts.length === 0 && <p>There are no posts</p>}
    </main>
  );
};

export default HomePage;
