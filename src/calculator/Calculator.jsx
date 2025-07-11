import CalcScreen from './CalcScreen';
import './Calculator.css';
import LDSwitch from './LDSwitch';
import NumPad from './NumPad';

function Calculator() {
  return (
    <div className="main">
      <LDSwitch />

      <CalcScreen />
      <NumPad />
    </div>
  );
}

export default Calculator;
