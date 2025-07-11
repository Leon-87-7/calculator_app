import CalcScreen from './CalcScreen';
import './Calculator.css';
import NumPad from './NumPad';

function Calculator() {
  return (
    <div className="main">
      <CalcScreen />
      <NumPad />
    </div>
  );
}

export default Calculator;
