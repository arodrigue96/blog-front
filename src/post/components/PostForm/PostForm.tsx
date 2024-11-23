import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import "./PostForm.css";
import usePostsForm from "../../hooks/usePostsForm";

const PostForm: React.FC = () => {
  const { postData, buttonDisabled, updatePostData, isValidForm } =
    usePostsForm();
  const { title, imageUrl, altImageText, content, author } = postData;

  useEffect(() => {
    isValidForm();
  }, [isValidForm]);

  return (
    <form className="form">
      <div className="form__info">
        <label htmlFor="title">Title</label>
        <input
          className="form__input"
          type="text"
          id="title"
          value={title}
          onChange={updatePostData}
          required
        />
      </div>
      <div className="form__info">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          className="form__input"
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={updatePostData}
          required
        />
      </div>
      <div className="form__info">
        <label htmlFor="altImageText">Alternative Text</label>
        <input
          className="form__input"
          type="text"
          id="altImageText"
          value={altImageText}
          onChange={updatePostData}
          required
        />
      </div>
      <div className="form__info">
        <label htmlFor="content">Content</label>
        <input
          className="form__input"
          type="text"
          id="content"
          value={content}
          onChange={updatePostData}
          required
        />
      </div>
      <div className="form__info">
        <label htmlFor="author">Author</label>
        <input
          className="form__input"
          type="text"
          id="author"
          value={author}
          onChange={updatePostData}
          required
        />
      </div>
      <Button
        className="button"
        text="Create Post"
        type="submit"
        isDisabled={buttonDisabled}
      />
    </form>
  );
};

export default PostForm;
