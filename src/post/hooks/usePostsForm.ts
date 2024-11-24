import { useState } from "react";
import { PostData } from "../types";
import PostClient from "../client/PostClient";

const usePostsForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [postData, setPostData] = useState<PostData>({
    title: "",
    imageUrl: "",
    altImageText: "",
    content: "",
    author: "",
  });

  const updatePostData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostData((postData) => ({
      ...postData,
      [event.target.id]: event.target.value,
    }));
  };

  const isValidForm = () => {
    const { altImageText, author, content, imageUrl, title } = postData;

    const isValid =
      title.length > 0 &&
      imageUrl.length > 0 &&
      altImageText.length > 0 &&
      content.length > 0 &&
      author.length > 0;

    setIsButtonDisabled(!isValid);
  };

  const createPost = (postData: PostData) => {
    const postClient = new PostClient();

    postClient.createPost(postData);
  };

  return {
    postData,
    updatePostData,
    buttonDisabled: isButtonDisabled,
    setButtonDisabled: setIsButtonDisabled,
    isValidForm,
    createPost,
  };
};

export default usePostsForm;
