import { useState } from "react";

import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <Header />

      <StudentForm addStudent={addStudent} />

      <StudentList students={students} />

    </div>
  );
}

export default App;
