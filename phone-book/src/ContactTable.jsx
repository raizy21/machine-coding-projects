const ContactTable = ({ contacts, handleDelete }) => {
  return (
    <div className="list-container">
      <h1>contact list</h1>
      {contacts.length > 0 ? (
        <p className="empty-message">no contacts found</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>s. no.</th>
              <th>name</th>
              <th>phone</th>
              <th>email</th>
              <th>delete contact</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ContactTable;
