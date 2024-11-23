import Button from "../../../components/Button/Button";
import "./PostForm.css";

const PostForm: React.FC = () => {
  return (
    <form className="form">
      <div className="form__info">
        <label htmlFor="title">Title</label>
        <input className="form__input" type="text" id="title" required />
      </div>
      <div className="form__info">
        <label htmlFor="imageUrl">Image URL</label>
        <input className="form__input" type="url" id="imageUrl" required />
      </div>
      <div className="form__info">
        <label htmlFor="altText">Alternative Text</label>
        <input className="form__input" type="text" id="altText" required />
      </div>
      <div className="form__info">
        <label htmlFor="content">Content</label>
        <input className="form__input" type="text" id="content" required />
      </div>
      <div className="form__info">
        <label htmlFor="author">Author</label>
        <input className="form__input" type="text" id="author" required />
      </div>
      <Button text={"Create Post"} type="submit" />
    </form>
  );
};

export default PostForm;
