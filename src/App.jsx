import { useState } from 'react';
import './App.css';
import Calculator from './calculator/Calculator.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
