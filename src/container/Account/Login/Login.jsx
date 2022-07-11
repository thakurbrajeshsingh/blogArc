import React from "react";
// Material UI Components
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";
// css style
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
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

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Blog" />

        {account === "login" ? (
          <Wrapper>
            <TextField label="E-mail" variant="standard" />
            <TextField label="Password" variant="standard" />
            <LoginButton variant="contained">Login</LoginButton>
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
            <SignupButton>Signup</SignupButton>
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
