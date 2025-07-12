import CalcScreen from './CalcScreen';
import './Calculator.css';
import NumPad from './NumPad';
import { useState } from 'react';
import { Toggle } from './Toggle/Toggle';
import useLocalStorage from 'use-local-storage';

function Calculator() {
  const [isLight, setIsLight] = useLocalStorage(false);

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

      <CalcScreen />
      <NumPad />
    </div>
  );
}

export default Calculator;
