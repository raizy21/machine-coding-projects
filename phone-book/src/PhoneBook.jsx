import { useState, useEffect } from "react";
import ContactTable from "./ContactTable.jsx";

const PhoneBook = () => {
  let localStorageKey = "contact"; // key for localStorage

  // useState to manage contacts state
  const [contacts, setContacts] = useState(() => {
    const storeContacts = localStorage.getItem(localStorageKey);
    return storeContacts ? JSON.parse(storeContacts) : [];
  });

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleInput = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, { ...newContact }]);
    setNewContact({ name: "", phone: "", email: "" });
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>phone book with localStorage</h1>
          <form onSubmit={handleSubmit}>
            <label>enter name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={newContact.name}
              onChange={handleInput}
            />
            <label>enter phone:</label>
            <input
              type="text"
              name="phone"
              placeholder="enter phone"
              value={newContact.phone}
              onChange={handleInput}
            />
            <label>enter email:</label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={newContact.email}
              onChange={handleInput}
            />
            <button type="submit" className="btn">
              add contact
            </button>
          </form>
        </div>
      </div>

      <ContactTable contacts={contacts} handleDelete={handleDelete} />
    </>
  );
};
export default PhoneBook;
