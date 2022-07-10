import React from "react";
// Material UI Components
import { Box } from "@mui/material";
// component
import { CustomTextField } from "../../../components";

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const handleChange = () => {
    console.log("Hello");
  };

  return (
    <Box>
      <img src={imageURL} alt="Blog" />
      <CustomTextField label="E-mail" onChange={handleChange} />
      <CustomTextField label="Password" onChange={handleChange} />
    </Box>
  );
};

export default Login;
