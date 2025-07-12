import DeleteBtn from './DeleteBtn';
import HistoryBtn from './HistoryBtn';

function CalcScreen() {
  return (
    <div className="calc-screen">
      <section className="output-section">
        <div className="input-display">displaying input </div>
        <div className="calc-result">result</div>
      </section>
      <div className="control-line">
        <HistoryBtn />
        <DeleteBtn />
      </div>
    </div>
  );
}

export default CalcScreen;
