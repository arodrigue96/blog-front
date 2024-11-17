import { Post } from "../../client/types";
import PostCard from "../PostCard/PostCard";

interface PostCardsListProps {
  posts: Post[];
}

const PostCardsList: React.FC<PostCardsListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostCardsList;
