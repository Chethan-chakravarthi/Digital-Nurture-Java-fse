import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!name || !course) return;

    addStudent({
      name,
      course
    });

    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;
