function App() {
  const name = 'Chethan';
  const course = 'React';
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to React JSX</h1>
      <h2>Hello {name}</h2>
      <p>Learning {course}</p>
      <h3>Current Year: {new Date().getFullYear()}</h3>
    </div>
  );
}
export default App;
