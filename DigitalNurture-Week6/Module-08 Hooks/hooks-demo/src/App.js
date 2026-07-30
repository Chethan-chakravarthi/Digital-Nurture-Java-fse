import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>React Hooks Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

    </div>
  );
}

export default App;
