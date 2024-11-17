import { Post } from "../../client/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li>
      <article className="post-card">
        <h2 className="post-card__title">{post.title}</h2>
      </article>
    </li>
  );
};

export default PostCard;
