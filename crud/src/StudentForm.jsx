import { useState, useEffect } from "react"; // useState and useEffect hooks for managing state and side effects

const StudentForm = ({ onSubmit, editingId, setEditingId }) => {
  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    class: "",
    age: "",
  }); // data structure to hold form input values

  useEffect(() => {
    if (editingId) {
      // fetch the student data for editing if editingId is set
      // replace this with the actual logic to fetch the student data
      // for now, we can just reset the form
      setFormData({
        rollNumber: "",
        name: "",
        class: "",
        age: "",
      });
    } else {
      clearForm();
    }
  }, [editingId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      rollNumber: "",
      name: "",
      class: "",
      age: "",
    });
    setEditingId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="rollNumber"
            placeholder="roll number"
            value={formData.rollNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="class"
            placeholder="class"
            value={formData.class}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="age"
            placeholder="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit">{editingId ? "update" : "create"} student</button>
    </form>
  );
};

export default StudentForm;
