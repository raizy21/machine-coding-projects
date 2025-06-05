const StudentList = ({ students, editStudent, deleteStudent }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>serial no.</th>
          <th>roll number</th>
          <th>name</th>
          <th>class</th>
          <th>age</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.rollNumber}</td>
            <td>{student.name}</td>
            <td>{student.class}</td>
            <td>{student.age}</td>
            <td>
              <button className="edit" onClick={() => editStudent(student)}>
                edit
              </button>
              <button
                className="delete"
                onClick={() => deleteStudent(student.id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
