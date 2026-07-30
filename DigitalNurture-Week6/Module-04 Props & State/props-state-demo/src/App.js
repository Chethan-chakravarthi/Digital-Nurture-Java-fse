import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <Student name='Chethan' course='React JS' />
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br /><br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <Footer />
    </div>
  );
}
export default App;
