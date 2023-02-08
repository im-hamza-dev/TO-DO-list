import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className="button" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
