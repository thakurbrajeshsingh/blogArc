import React from "react";
import { Box, Typography } from "@mui/material";

const Comment = ({ comment }) => {
  return (
    <Box>
      <Box>
        <Typography>{comment.name}</Typography>
        <Typography>{new Date(comment.date).toDateString()}</Typography>
      </Box>
      <Box>
        <Typography>{comment.comments}</Typography>
      </Box>
    </Box>
  );
};

export default Comment;
