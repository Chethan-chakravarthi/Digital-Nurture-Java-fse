import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <h1>User List</h1>

      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "80%"
        }}
      >

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>

        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;
