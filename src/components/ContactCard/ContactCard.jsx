import React from "react";
import "./ContactCard.css";

const ContactCard = ({ item, deleteContact, handleEdit }) => {
  return (
    <>
      <div>
        <img src={item.image} className="list-img" />
        <p> Name: {item.name}</p>
        <p> age: {item.age}</p>
        <p> phone: {item.phone}</p>
        <button className="btn-edit" onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => deleteContact(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default ContactCard;
