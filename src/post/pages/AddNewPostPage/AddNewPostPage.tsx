import { useNavigate } from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import usePostsForm from "../../hooks/usePostsForm";
import { PostData } from "../../types";

const AddNewPostPage: React.FC = () => {
  const { createPost } = usePostsForm();
  const navigate = useNavigate();

  const onSubmit = async (postData: PostData) => {
    await createPost(postData);

    navigate("/home");
  };

  return (
    <main>
      <h2 className="page-title">Add new post</h2>
      <PostForm onSubmit={onSubmit} />
    </main>
  );
};

export default AddNewPostPage;
