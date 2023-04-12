import React from "react";
import "./input.scss";
import { Form } from "react-bootstrap";
const Input = ({ type, step, id, value, onChange, label }) => {
  return (
    <Form.Group className="input">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        type={type}
        step={step}
        id={id}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default Input;
