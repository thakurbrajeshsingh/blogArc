import React from "react";
// Material UI Components
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState, useContext } from "react";

// navigation
import { useNavigate } from "react-router-dom";

// context for sharing
import { DataContext } from "../../../context/DataProvider";

// API
import { API } from "../../../service/api";

// css style
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  maxWidth: 200,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
  borderRadius: "20px 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0px;
  margin-top: 10px;
  font-weight: 600px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  // lOGO URL
  const imageURL = "https://i.ibb.co/cJF9QnZ/Logo-3.webp";

  // STATE
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      setError("Something went wrong! Try Again");
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");

      sessionStorage.setItem(
        `accessToken`,
        `Bearer ${response.data.accessToken}`
      );

      sessionStorage.setItem(
        `refreshToken`,
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        username: response.data.username,
        name: response.data.name,
      });
      isUserAuthenticated(true);
      navigate("/");
    } else {
      setError("Something went wrong!Try Again");
    }
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Blog" />

        {account === "login" ? (
          <Wrapper>
            <TextField
              label="Enter Username"
              variant="standard"
              name="username"
              value={login.username}
              onChange={(e) => onValueChange(e)}
            />
            <TextField
              label="Enter Password"
              variant="standard"
              name="password"
              value={login.password}
              onChange={(e) => onValueChange(e)}
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton variant="text" onClick={() => toggleSignup()}>
              CREATE AN ACCOUNT
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              label="Enter Name"
              variant="standard"
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              label="Enter Username"
              variant="standard"
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              label="Enter Password"
              variant="standard"
              name="password"
              onChange={(e) => onInputChange(e)}
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              ALREADY HAVE AN ACCOUNT
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
