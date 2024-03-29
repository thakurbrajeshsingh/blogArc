import { useState, useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { useParams, Link, useNavigate } from "react-router-dom";
import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

import { PostComments } from "../../../components";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weigth: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;
const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const Author = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
`;

const Description = styled(Typography)`
  word-break: break-word;
`;

const DetailedPost = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const { account } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deletePost = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  const imgURL = post.picture
    ? post.picture
    : "https://i.ibb.co/j4yd8Kn/post-Banner.jpg";
  return (
    <Container>
      <Image src={imgURL} alt="blog" />
      <Box style={{ float: "right" }}>
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <EditIcon color="primary" />
            </Link>
            <DeleteIcon
              color="error"
              onClick={() => deletePost()}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </Box>

      <Heading>{post.title}</Heading>
      <Author>
        <Typography>
          Author:
          <Box component="span" style={{ fontWeigth: 600 }}>
            {post.username}
          </Box>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Author>
      <Description>{post.description}</Description>
      <PostComments post={post} />
    </Container>
  );
};

DetailedPost.propTypes = {};

export default DetailedPost;
