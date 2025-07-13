import CalcScreen from './CalcScreen';
import './Calculator.css';
import NumPad from './NumPad';
import { useState } from 'react';
import { Toggle } from './Toggle/Toggle';
import useLocalStorage from 'use-local-storage';

function Calculator() {
  const [isLight, setIsLight] = useLocalStorage(false);
  const [currentInput, setCurrentInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleNumberClick = (number) => {
    if (currentInput === '0' || currentInput === result) {
      setCurrentInput(number);
    } else {
      setCurrentInput(currentInput + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentInput !== '' && previousInput !== '' && operator) {
      handleEqualsClick();
    }
    setOperator(op);
    setPreviousInput(currentInput);
    setCurrentInput('');
  };

  const handleEqualsClick = () => {
    if (previousInput !== '' && currentInput !== '' && operator) {
      let calculation;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      switch (operator) {
        case '+':
          calculation = prev + current;
          break;
        case '-':
          calculation = prev - current;
          break;
        case '*':
          calculation = prev * current;
          break;
        case '/':
          calculation = prev / current;
          break;
        case '%':
          calculation = prev % current;
          break;
        default:
          return;
      }

      const resultString = calculation.toString();
      setResult(resultString);
      setCurrentInput(resultString);

      // Add to history
      const historyEntry = `${previousInput} ${operator} ${currentInput} = ${resultString}`;
      setHistory([...history, historyEntry]);

      setOperator('');
      setPreviousInput('');
    }
  };

  const handleClearClick = () => {
    setCurrentInput('0');
    setResult('');
    setOperator('');
    setPreviousInput('');
    setHistory([]);
  };

  const handleDeleteClick = () => {
    if (currentInput.length > 1) {
      setCurrentInput(currentInput.slice(0, -1));
    } else {
      setCurrentInput('0');
    }
  };

  const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
      setCurrentInput(currentInput + '.');
    }
  };

  const handleToggleSignClick = () => {
    if (currentInput !== '0') {
      setCurrentInput(
        currentInput.startsWith('-')
          ? currentInput.slice(1)
          : '-' + currentInput
      );
    }
  };

  const handleNewClick = () => {
    setCurrentInput('0');
    setPreviousInput('');
    setOperator('');
    setResult('');
    console.log('new calculation started');
  };

  return (
    <div
      className="main"
      data-them={isLight ? 'light' : 'dark'}
    >
      <div className="spacer">
        <Toggle
          isChecked={isLight}
          handleChange={() => {
            setIsLight(!isLight);
          }}
        />
      </div>

      <CalcScreen
        operator={operator}
        currentInput={currentInput}
        previousInput={previousInput}
        result={result}
        onHistoryClick={() => console.log('History:', history)}
        onDeleteClick={handleDeleteClick}
      />

      <NumPad
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
        onDecimalClick={handleDecimalClick}
        onToggleSignClick={handleToggleSignClick}
        onNewClick={handleNewClick}
      />
    </div>
  );
}

export default Calculator;
