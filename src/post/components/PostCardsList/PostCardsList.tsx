import { Post } from "../../types";
import PostCard from "../PostCard/PostCard";
import "./PostCardsList.css";

interface PostCardsListProps {
  posts: Post[];
}

const PostCardsList: React.FC<PostCardsListProps> = ({ posts }) => {
  return (
    <ul className="post-cards-list">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostCardsList;
