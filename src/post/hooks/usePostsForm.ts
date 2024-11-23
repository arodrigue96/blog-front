import { useState } from "react";
import { PostData } from "../types";

const usePostsForm = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

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

    setButtonDisabled(!isValid);
  };

  return {
    postData,
    updatePostData,
    buttonDisabled,
    setButtonDisabled,
    isValidForm,
  };
};

export default usePostsForm;
