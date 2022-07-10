import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const CustomTextField = ({
  label,
  required,
  onChange,
  value,
  varientID,
  variant,
}) => {
  return (
    <TextField
      id={varientID}
      label={label}
      variant={variant}
      required={required}
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
};

CustomTextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

CustomTextField.defaultProps = {
  id: "standard-basic",
  variant: "standard",
};

export default CustomTextField;
