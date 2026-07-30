import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${student.name}\nEmail: ${student.email}\nCourse: ${student.course}`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <hr />

      <h2>Entered Details</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Course:</b> {student.course}</p>
    </div>
  );
}

export default App;
