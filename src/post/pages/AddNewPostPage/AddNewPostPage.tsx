import PostForm from "../../components/PostForm/PostForm";
import usePostsForm from "../../hooks/usePostsForm";

const AddNewPostPage: React.FC = () => {
  const { createPost } = usePostsForm();

  return (
    <main>
      <h2 className="page-title">Add new post</h2>
      <PostForm onSubmit={createPost} />
    </main>
  );
};

export default AddNewPostPage;
