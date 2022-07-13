import { Grid } from "@mui/material";
import React from "react";

// component
import { Banner, Categories } from "../../components";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
          Post
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
