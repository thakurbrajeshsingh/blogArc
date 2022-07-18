import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  background: url(https://i.ibb.co/WFLxTDv/blog-Arc-Banner.webp)
    center/55% repeat-x #000;
  width: 100%;
  height: 50vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
  
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BlogArc</Heading>
      <SubHeading>create your Space</SubHeading>
    </Image>
  );
};

export default Banner;
