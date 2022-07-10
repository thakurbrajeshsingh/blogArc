import React from "react";
import PropTypes from "prop-types";

import { Button, styled } from "@mui/material";

const CustomButton = ({ btnLabel, variant,style }) => {
  
  const CustomButton = styled(Button)`
    text-transform: none;
  `;

  return (
  <CustomButton variant={variant} style={style} sx>{btnLabel}</CustomButton>
  );
};

CustomButton.propTypes = {
  btnLabel: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  variant: "contained",
};

export default CustomButton;
