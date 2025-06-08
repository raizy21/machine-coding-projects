const TableComponent = ({ currentItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>s. no.</th>
          <th>name</th>
          <th>email</th>
          <th>gender</th>
        </tr>
      </thead>
      <tbody>
        {currentItems?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              {item.firstName} {item.lastName}
            </td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableComponent;
