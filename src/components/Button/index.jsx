import React from "react";
import * as C from "./styles";

const Button = ({ Style, Text, onClick, Type = "button" }) => {
  return (
    <C.Button className={Style} type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;