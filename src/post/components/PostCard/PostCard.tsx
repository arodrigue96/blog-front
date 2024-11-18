import { Post } from "../../client/types";
import moment from "moment";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, author, altImageText, imageUrl, date, content } = post;

  const formattedDate = moment(date).format("DD/MM/YY");

  return (
    <li>
      <article className="post-card">
        <h2 className="post-card__title">{title}</h2>
        <img
          className="post-card__image"
          src={`/images/${imageUrl}`}
          alt={altImageText}
          width={298}
          height={199}
        />
        <p className="post-card__content">{content}</p>
        <div className="post-card__info">
          <h3>{`Author: ${author}`}</h3>
          <p>{`Date: ${formattedDate} `}</p>
        </div>
      </article>
    </li>
  );
};

export default PostCard;
