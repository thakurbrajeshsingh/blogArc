import { useState, useContext } from "react";
import { Box, TextareaAutosize, Button, styled } from "@mui/material";

import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";
const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px;
  width: 100%;
  margin: 0 20px;
`;

const IniatialValues = {
  name: "",
  postId: "",
  comments: "",
  date: new Date(),
};

const PostComments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comment, setComment] = useState(IniatialValues);
  const { account } = useContext(DataContext);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async (e) => {
    let response = await API.newComment(comment);
    if (response.isSuccess) {
      setComment(IniatialValues);
    }
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="image" />
        <StyledTextArea
          minRows={5}
          placeholder="What's On your Mind?"
          value={comment.comments}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: 40 }}
          onClick={(e) => addComment(e)}
        >
          Comment
        </Button>
      </Container>
      <Box></Box>
    </Box>
  );
};

export default PostComments;
