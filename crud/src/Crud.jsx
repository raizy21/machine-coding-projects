import { useState, useEffect } from "react"; // useState and useEffect for state management and side effects
import axios from "axios"; // axios for making http requests
import { ToastContainer, toast } from "react-toastify"; // react-toastify for notifications
import StudentForm from "./StudentForm"; // StudentForm component for creating and editing students
import StudentList from "./StudentList"; // StudentList component for displaying the list of students
import "react-toastify/dist/ReactToastify.css";

const Crud = () => {
  const [students, setStudents] = useState([]); // state to hold the list of students
  const [editingId, setEditingId] = useState(null); // state to hold the ID of the student being edited
  const apiUrl = "https://658d818c7c48dce947394fae.mockapi.io/api/v1/students"; // api endpoint for student data

  // read (get all students)
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(apiUrl);
      setStudents(response.data);
    } catch (error) {
      toast.error(error + " error fetching students.");
    }
  };

  // create (add a new student)
  const createStudent = async (formData) => {
    try {
      const response = await axios.post(apiUrl, formData);
      setStudents([...students, response.data]);
      toast.success("student created successfully!");
    } catch (error) {
      toast.error(error + " error creating student.");
    }
  };

  // update (edit a student)
  const updateStudent = async (formData) => {
    try {
      const response = await axios.put(`${apiUrl}/${editingId}`, formData);
      setStudents(
        students.map((student) =>
          student.id === editingId ? response.data : student
        )
      );
      toast.success("student updated successfully!");
    } catch (error) {
      toast.error(error + " error updating student.");
    }
  };

  // delete (remove a student)
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setStudents(students.filter((student) => student.id !== id));
      toast.success("student deleted successfully!");
    } catch (error) {
      toast.error(error + " error deleting student.");
    }
  };

  // handle form submit for creating or updating
  const handleFormSubmit = (formData) => {
    if (editingId) {
      updateStudent(formData);
    } else {
      createStudent(formData);
    }
  };

  // set form for editing a student
  const editStudent = (student) => {
    setEditingId(student.id);
  };

  return (
    <div className="container">
      <ToastContainer /> {/* toast container for notifications */}
      <h1>crud operations for students</h1>
      {/* form to create or update student */}
      <StudentForm
        onSubmit={handleFormSubmit}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      {/* student list */}
      <h2>student list</h2>
      <StudentList
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Crud;
