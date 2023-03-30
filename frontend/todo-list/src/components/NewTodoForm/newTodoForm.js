import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Input from "../Input/input";
import Button from "../Button/button";
import "./newTodoForm.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewTodoForm = ({ openForm, onAddTodo, setOpenForm }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descChangeHandler = (data) => {
    setDescription(data);
  };
  const deadlineChangeHandler = (event) => {
    setDeadline(event.target.value);
  };
  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };
  const tagsChangeHandler = (event) => {
    setTags(event.target.value);
  };

  const submitProductHandler = (event) => {
    event.preventDefault();
    onAddTodo(enteredTitle, description);
  };

  return (
    <Modal
      show={openForm}
      size="md"
      backdrop="static"
      onHide={() => setOpenForm(false)}
      dialogClassName="custom-modal"
      placement={"end"}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Notes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitProductHandler} className="form-new-notes">
          <Input
            type="text"
            label="Title"
            id="title"
            autoFocus
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              descChangeHandler(data);
            }}
          />
          <div className="form-input-row">
            <Input
              type="text"
              label="Status"
              id="status"
              value={status}
              onChange={statusChangeHandler}
            />
            <Input
              type="date"
              label="Deadline"
              id="date"
              value={deadline}
              onChange={deadlineChangeHandler}
            />
            <Form.Select onChange={() => {}} value={color}>
              <option>Select</option>
              <option>Red</option>
              <option>Amber</option>
              <option>Blue</option>
              <option>Purple</option>
              <option>Green</option>
              <option>Grey</option>
              <option>Black</option>
              <option>White</option>
            </Form.Select>
          </div>
          <Input
            type="tags"
            label="Tags"
            id="tags"
            value={tags}
            onChange={tagsChangeHandler}
          />
          <div className="form-button-wrapper">
            <Button type="submit">Add Todo </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewTodoForm;
