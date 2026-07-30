import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [name, setName] = useState("");

  const showMessage = () => {
    alert("Welcome " + name);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <Header />

      <h2>Event Handling Demo</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={showMessage}>
        Submit
      </button>

      <h3>Hello {name}</h3>

      <Footer />

    </div>
  );
}

export default App;
