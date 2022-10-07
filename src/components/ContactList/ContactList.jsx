import React from "react";
import "./ContactList.css";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, deleteContact, handleEdit }) => {
  return (
    <>
      <h3 className="list-title">Contacts List</h3>
      <div className="contact-list">
        {contacts.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            deleteContact={deleteContact}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
