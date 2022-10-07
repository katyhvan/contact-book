import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  function addContact(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  function deleteContact(id) {
    let newContacts = [...contacts];
    newContacts = newContacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contacts.find((item) => item.id === id);
    setEditContact(obj);
    setShow(true);
  }

  function handleSave(obj) {
    let newContacts = contacts.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setContacts(newContacts);
    setShow(false);
  }

  return (
    <>
      <AddContact addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        handleEdit={handleEdit}
      />
      {show && (
        <EditContact
          editContact={editContact}
          show={show}
          handleClose={handleClose}
          handleSave={handleSave}
        />
      )}
    </>
  );
};

export default App;
