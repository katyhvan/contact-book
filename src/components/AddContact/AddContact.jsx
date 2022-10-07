import React, { useState } from "react";
import "./AddContact.css";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  function createContact() {
    if (!name || !age || !phone || !image) {
      alert("Some inputs are empty!");
      return;
    }

    let contactObj = {
      name: name,
      age: age,
      phone: phone,
      image: image,
      id: Date.now(),
    };

    addContact(contactObj);
    setName("");
    setAge("");
    setPhone("");
    setImage("");
  }

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      <input
        type="text"
        className="inp"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        className="inp"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="age"
      />
      <br />
      <input
        type="text"
        className="inp"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder="phone number"
      />
      <br />
      <input
        type="text"
        className="inp"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="image"
      />
      <br />
      <button className="btn-add" onClick={createContact}>
        Add contact
      </button>
    </div>
  );
};

export default AddContact;
