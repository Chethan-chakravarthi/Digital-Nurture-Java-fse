function StudentList({ students }) {

  return (

    <table
      border="1"
      style={{
        margin: "auto",
        marginTop: "20px",
        borderCollapse: "collapse",
        width: "60%"
      }}
    >

      <thead>

        <tr>
          <th>Name</th>
          <th>Course</th>
        </tr>

      </thead>

      <tbody>

        {students.map((student, index) => (

          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.course}</td>
          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default StudentList;
