import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormControl } from "react-bootstrap";

const EditContact = ({ editContact, show, handleClose, handleSave }) => {
  const [contact, setContact] = useState(editContact);

  const editName = (e) => {
    let newObj = {
      ...contact,
      name: e.target.value,
    };
    setContact(newObj);
  };

  const editAge = (e) => {
    let newObj = {
      ...contact,
      age: e.target.value,
    };
    setContact(newObj);
  };

  const editPhone = (e) => {
    let newObj = {
      ...contact,
      phone: e.target.value,
    };
    setContact(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...contact,
      image: e.target.value,
    };
    setContact(newObj);
  };

  function saveChanges() {
    handleSave(contact);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={contact.name}
              onChange={editName}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Age"
              value={contact.age}
              onChange={editAge}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Phone number"
              value={contact.phone}
              onChange={editPhone}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={contact.image}
              onChange={editImage}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;
