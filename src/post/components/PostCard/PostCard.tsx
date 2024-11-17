import { Post } from "../../client/types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
  imageUrl: string;
  altImageText: string;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li>
      <article className="post-card">
        <h2 className="post-card__title">{post.title}</h2>
        <img
          className="post-card__image"
          src={post.imageUrl}
          alt={post.altImageText}
          width={298}
          height={199}
        />
      </article>
    </li>
  );
};

export default PostCard;
