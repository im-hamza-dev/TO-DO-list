import React from "react";
import "./input.scss";
import { Form } from "react-bootstrap";
const Input = (props) => {
  return (
    <Form.Group className="input">
      <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        step={props.step}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default Input;
