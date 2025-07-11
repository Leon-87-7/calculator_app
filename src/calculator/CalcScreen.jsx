import DeleteBtn from './DeleteBtn';
import HistoryBtn from './HistoryBtn';
import LDSwitch from './LDSwitch';

function CalcScreen() {
  return (
    <div className="calc-screen">
      <LDSwitch />
      <div className="input-sidplay">displaying input </div>
      <div className="calc-result">displaying calculation result</div>
      <div className="control-line">
        <HistoryBtn />
        <DeleteBtn />
      </div>
    </div>
  );
}

export default CalcScreen;
