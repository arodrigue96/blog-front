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
        <h2>{post.title}</h2>
        <img
          className="post-card__image"
          src={post.imageUrl}
          alt={post.altImageText}
          width={298}
          height={199}
        />
        <p className="post-card__content">{post.content}</p>
      </article>
    </li>
  );
};

export default PostCard;
