import React from "react";
import { ButtonStyle } from "./ButtonStyled";

const Button = ({ onClick, disabled, children }) => (
  <ButtonStyle onClick={onClick} disabled={disabled}>
    {children}
  </ButtonStyle>
);

export default Button;
